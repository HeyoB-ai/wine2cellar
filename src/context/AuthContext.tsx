import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Session, User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';
import type { Profile, UserRole } from '../lib/supabase';

interface SignUpOptions {
  role: UserRole;
  fullName: string;
  companyName?: string;
  buyerType?: 'particulier' | 'horeca';
  companyKvk?: string;
  phone?: string;
}

interface AuthContextType {
  user: User | null;
  session: Session | null;
  profile: Profile | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any; profile: Profile | null }>;
  signUp: (email: string, password: string, options: SignUpOptions) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  async function fetchProfile(userId: string): Promise<Profile | null> {
    console.log('[Auth] fetchProfile for userId:', userId);
    const { data, error } = await supabase.from('profiles').select('*').eq('id', userId).maybeSingle();
    console.log('[Auth] fetchProfile result:', { data, error });
    if (data) {
      setProfile(data as Profile);
      return data as Profile;
    }
    return null;
  }

  useEffect(() => {
    console.log('[Auth] Supabase URL:', import.meta.env.VITE_SUPABASE_URL);

    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log('[Auth] getSession:', session?.user?.id ?? 'no session');
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) fetchProfile(session.user.id);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('[Auth] onAuthStateChange event:', event, 'user:', session?.user?.id ?? 'null');
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) fetchProfile(session.user.id);
      else setProfile(null);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function signIn(email: string, password: string) {
    console.log('[Auth] signIn attempt for:', email);
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    console.log('[Auth] signInWithPassword result:', { userId: data?.user?.id, error });
    if (error) return { error, profile: null };
    // Fetch profile immediately so caller can use role for redirect
    const p = data.user ? await fetchProfile(data.user.id) : null;
    console.log('[Auth] profile after signIn:', p);
    return { error: null, profile: p };
  }

  async function signUp(email: string, password: string, options: SignUpOptions) {
    const { role, fullName, companyName, buyerType, companyKvk, phone } = options;
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) return { error };
    if (data.user) {
      await supabase.from('profiles').insert({
        id: data.user.id,
        email,
        role,
        full_name: fullName,
        company_name: companyName || null,
        buyer_type: buyerType || null,
        company_kvk: companyKvk || null,
        phone: phone || null,
      });
    }
    return { error: null };
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  return (
    <AuthContext.Provider value={{ user, session, profile, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}

export type { UserRole };
