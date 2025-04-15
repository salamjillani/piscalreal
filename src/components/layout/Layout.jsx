import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useLocation, Link } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  const isDashboard = location.pathname.includes('/admin') ||
                      location.pathname.includes('/seller') ||
                      location.pathname.includes('/agent') ||
                      location.pathname.includes('/legal');
    
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {isDashboard ? (
          <div className="flex">
            <aside className="w-64 bg-gray-100 p-4 hidden md:block">
              {location.pathname.includes('/admin') && <AdminSidebar />}
              {location.pathname.includes('/seller') && <SellerSidebar />}
              {location.pathname.includes('/agent') && <AgentSidebar />}
              {location.pathname.includes('/legal') && <LegalSidebar />}
            </aside>
            <div className="flex-1 p-6">{children}</div>
          </div>
        ) : (
          <div className="py-6">{children}</div>
        )}
      </main>
      <Footer />
    </div>
  );
};

// Side navigation components
const AdminSidebar = () => {
  return (
    <nav className="space-y-2">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Admin Panel</h3>
      <Link to="/admin/dashboard" className="block py-2 px-4 rounded hover:bg-gray-200">Dashboard</Link>
      <Link to="/admin/listings" className="block py-2 px-4 rounded hover:bg-gray-200">Manage Listings</Link>
      <Link to="/admin/users" className="block py-2 px-4 rounded hover:bg-gray-200">Manage Users</Link>
      <Link to="/admin/reports" className="block py-2 px-4 rounded hover:bg-gray-200">Reports</Link>
    </nav>
  );
};

const SellerSidebar = () => {
  return (
    <nav className="space-y-2">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Seller Panel</h3>
      <Link to="/seller/dashboard" className="block py-2 px-4 rounded hover:bg-gray-200">Dashboard</Link>
      <Link to="/seller/create-listing" className="block py-2 px-4 rounded hover:bg-gray-200">Create Listing</Link>
      <Link to="/seller/listings" className="block py-2 px-4 rounded hover:bg-gray-200">My Listings</Link>
      <Link to="/seller/inquiries" className="block py-2 px-4 rounded hover:bg-gray-200">Inquiries</Link>
    </nav>
  );
};

const AgentSidebar = () => {
  return (
    <nav className="space-y-2">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Agent Panel</h3>
      <Link to="/agent/dashboard" className="block py-2 px-4 rounded hover:bg-gray-200">Dashboard</Link>
      <Link to="/agent/listings" className="block py-2 px-4 rounded hover:bg-gray-200">Manage Listings</Link>
      <Link to="/agent/clients" className="block py-2 px-4 rounded hover:bg-gray-200">Clients</Link>
      <Link to="/agent/calendar" className="block py-2 px-4 rounded hover:bg-gray-200">Calendar</Link>
    </nav>
  );
};

const LegalSidebar = () => {
  return (
    <nav className="space-y-2">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Legal Panel</h3>
      <Link to="/legal/dashboard" className="block py-2 px-4 rounded hover:bg-gray-200">Dashboard</Link>
      <Link to="/legal/documents" className="block py-2 px-4 rounded hover:bg-gray-200">Documents</Link>
      <Link to="/legal/transactions" className="block py-2 px-4 rounded hover:bg-gray-200">Transactions</Link>
      <Link to="/legal/clients" className="block py-2 px-4 rounded hover:bg-gray-200">Clients</Link>
    </nav>
  );
};
 
export default Layout;