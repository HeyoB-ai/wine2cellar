import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import AdminDashboard from './pages/dashboard/AdminDashboard';
import SupplierDashboard from './pages/dashboard/SupplierDashboard';
import CustomerDashboard from './pages/dashboard/CustomerDashboard';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/producers" element={<ProducersPage />} />
            <Route path="/producer/:id" element={<ProducerDetailPage />} />
            <Route path="/for-producers" element={<ForProducersPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
          <Route path="/dashboard/admin" element={
            <ProtectedRoute allowedRoles={['admin']}><AdminDashboard /></ProtectedRoute>
          } />
          <Route path="/dashboard/supplier" element={
            <ProtectedRoute allowedRoles={['supplier']}><SupplierDashboard /></ProtectedRoute>
          } />
          <Route path="/dashboard/customer" element={
            <ProtectedRoute allowedRoles={['customer']}><CustomerDashboard /></ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
