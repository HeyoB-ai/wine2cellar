import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import type { UserRole } from '../context/AuthContext';

interface Props {
  children: React.ReactNode;
  allowedRoles: UserRole[];
}

export default function ProtectedRoute({ children, allowedRoles }: Props) {
  const { user, profile, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#0D0F1E' }}>
        <div className="w-8 h-8 rounded-full animate-spin" style={{ border: '2px solid rgba(212,160,23,0.25)', borderTopColor: '#D4A017' }} />
      </div>
    );
  }

  if (!user) return <Navigate to="/login" replace />;
  if (profile && !allowedRoles.includes(profile.role)) return <Navigate to="/" replace />;

  return <>{children}</>;
}
