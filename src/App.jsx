import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';
import QuickViewModal from './components/modals/QuickViewModal';
import OrderTrackingModal from './components/modals/OrderTrackingModal';
import PolicyModal from './components/modals/PolicyModal';
import ToastContainer from './components/toast/ToastContainer';

// Pages
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CategoriesPage from './pages/CategoriesPage';
import AccountPage from './pages/AccountPage';
import StoryPage from './pages/StoryPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

function MainAppContent() {
  const { currentPage } = useApp();
  const [selectedPolicy, setSelectedPolicy] = useState(null);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onOpenPolicy={setSelectedPolicy} />;
      case 'products':
        return <ProductsPage />;
      case 'categories':
        return <CategoriesPage />;
      case 'account':
        return <AccountPage onOpenPolicy={setSelectedPolicy} />;
      case 'story':
        return <StoryPage />;
      case 'blog':
        return <BlogPage />;
      case 'contact':
        return <ContactPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage onOpenPolicy={setSelectedPolicy} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFDFB] text-[#1F2937]">
      {/* Top Banner with trust propositions and quick links */}
      <TopBar />

      {/* Main Navigation Header */}
      <Navbar />

      {/* Active Page View */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Global Interactive Drawers & Modals */}
      <CartDrawer />
      <QuickViewModal />
      <OrderTrackingModal />
      <PolicyModal policyTitle={selectedPolicy} onClose={() => setSelectedPolicy(null)} />
      <ToastContainer />

      {/* Brand Footer */}
      <Footer onOpenPolicy={setSelectedPolicy} />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainAppContent />
    </AppProvider>
  );
}
