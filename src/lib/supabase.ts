import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type UserRole = 'admin' | 'supplier' | 'customer';

export interface Profile {
  id: string;
  email: string;
  role: UserRole;
  full_name: string | null;
  company_name: string | null;
  created_at: string;
}
