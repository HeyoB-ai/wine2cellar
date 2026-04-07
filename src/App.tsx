import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import ProducersPage from './pages/ProducersPage';
import ProducerDetailPage from './pages/ProducerDetailPage';
import ForProducersPage from './pages/ForProducersPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LotsPage from './pages/LotsPage';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import WijnhuisDashboard from './pages/dashboard/WijnhuisDashboard';
import AfnemerDashboard from './pages/dashboard/AfnemerDashboard';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/partijen" element={<LotsPage />} />
            <Route path="/producers" element={<ProducersPage />} />
            <Route path="/producer/:id" element={<ProducerDetailPage />} />
            <Route path="/for-producers" element={<ForProducersPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
          <Route path="/dashboard/admin" element={
            <ProtectedRoute allowedRoles={['admin']}><AdminDashboard /></ProtectedRoute>
          } />
          <Route path="/dashboard/wijnhuis" element={
            <ProtectedRoute allowedRoles={['wijnhuis']}><WijnhuisDashboard /></ProtectedRoute>
          } />
          <Route path="/dashboard/afnemer" element={
            <ProtectedRoute allowedRoles={['afnemer']}><AfnemerDashboard /></ProtectedRoute>
          } />
          {/* Legacy redirects */}
          <Route path="/dashboard/supplier" element={<Navigate to="/dashboard/wijnhuis" replace />} />
          <Route path="/dashboard/customer" element={<Navigate to="/dashboard/afnemer" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
