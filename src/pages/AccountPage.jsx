import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import WhatsAppBanner from '../components/common/WhatsAppBanner';
import {
  User,
  ShoppingBag,
  Compass,
  MapPin,
  Heart,
  Bookmark,
  CreditCard,
  Bell,
  Star,
  Gift,
  Settings,
  HelpCircle,
  Edit2,
  Trash2,
  ChevronRight,
  Plus,
  Truck,
  ArrowRight,
  CheckCircle2,
  Clock,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

export default function AccountPage({ onOpenPolicy }) {
  const {
    user,
    setUser,
    navigateTo,
    openOrderTracking,
    activeAccountTab,
    setActiveAccountTab,
    wishlist,
    products,
    addToCart,
    deleteAddress,
    addAddress,
    addToast
  } = useApp();

  const [trackInputId, setTrackInputId] = useState('');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileFormData, setProfileFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    city: user.city,
    state: user.state
  });

  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [newAddressForm, setNewAddressForm] = useState({
    name: user.name,
    tag: 'Home',
    line1: '',
    area: '',
    city: 'Pune',
    pincode: '',
    state: 'Maharashtra',
    country: 'India',
    phone: user.phone
  });

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    if (trackInputId.trim()) {
      openOrderTracking(trackInputId.trim());
      setTrackInputId('');
    }
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setUser(prev => ({
      ...prev,
      ...profileFormData,
      avatarInitials: profileFormData.name.charAt(0).toUpperCase()
    }));
    setIsEditingProfile(false);
    addToast('Profile updated successfully!', 'success');
  };

  const handleSaveNewAddress = (e) => {
    e.preventDefault();
    if (!newAddressForm.line1 || !newAddressForm.pincode) {
      alert('Please fill in your address and pincode');
      return;
    }
    addAddress(newAddressForm);
    setIsAddingAddress(false);
    setNewAddressForm({
      name: user.name,
      tag: 'Home',
      line1: '',
      area: '',
      city: 'Pune',
      pincode: '',
      state: 'Maharashtra',
      country: 'India',
      phone: user.phone
    });
  };

  const wishlistedProducts = products.filter(p => wishlist.includes(p.id));

  // Left sidebar nav items matching the mockup
  const accountNavItems = [
    { id: 'profile', label: 'My Profile', icon: <User className="w-4 h-4" /> },
    { id: 'orders', label: 'My Orders', icon: <ShoppingBag className="w-4 h-4" />, badge: user.orders.length },
    { id: 'tracking', label: 'Order Tracking', icon: <Compass className="w-4 h-4" /> },
    { id: 'addresses', label: 'My Addresses', icon: <MapPin className="w-4 h-4" />, badge: user.addresses.length },
    { id: 'wishlist', label: 'Wishlist', icon: <Heart className="w-4 h-4" />, badge: wishlist.length },
    { id: 'saved', label: 'Saved Items', icon: <Bookmark className="w-4 h-4" /> },
    { id: 'payments', label: 'Payment Methods', icon: <CreditCard className="w-4 h-4" /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="w-4 h-4" />, badge: 2 },
    { id: 'reviews', label: 'My Reviews', icon: <Star className="w-4 h-4" /> },
    { id: 'refer', label: 'Refer & Earn', icon: <Gift className="w-4 h-4" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="w-4 h-4" /> }
  ];

  return (
    <div className="space-y-8">
      
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#EBF5EE] via-[#F4F9F5] to-[#EBF5EE] py-10 sm:py-14 border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-8 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F] flex items-center gap-1.5">
                <span>🍃</span> USER DASHBOARD
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F2D1F] font-serif">
                My Account
              </h1>
              <p className="text-sm text-gray-600">
                Manage your profile, orders, addresses and more.
              </p>
            </div>

            {/* Farm produce graphic */}
            <div className="md:col-span-4 hidden md:flex justify-end">
              <div className="rounded-2xl overflow-hidden shadow-sm border border-emerald-100 bg-white/60 p-2">
                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80"
                  alt="Organic produce"
                  className="w-48 h-24 object-cover rounded-xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. BREADCRUMBS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-gray-500">
          <button onClick={() => navigateTo('home')} className="hover:text-[#2D6A4F]">
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-[#143628] font-semibold">My Account</span>
          {activeAccountTab !== 'profile' && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-[#2D6A4F] capitalize font-medium">
                {activeAccountTab}
              </span>
            </>
          )}
        </nav>
      </div>

      {/* 3. MAIN DASHBOARD CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT NAVIGATION COLUMN */}
          <aside className="lg:col-span-3 space-y-5">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-card p-3 space-y-1">
              {accountNavItems.map((item) => {
                const isActive = activeAccountTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveAccountTab(item.id)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-[#EBF5EE] text-[#143628] font-bold shadow-sm'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-[#143628]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={isActive ? 'text-[#2D6A4F]' : 'text-gray-400'}>
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </div>

                    {item.badge !== undefined && (
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          isActive
                            ? 'bg-[#2D6A4F] text-white'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Need Help Card */}
            <div className="bg-[#F4F9F5] rounded-3xl p-5 border border-emerald-100 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-[#2D6A4F] flex items-center justify-center">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#143628]">Need Help?</h4>
                <p className="text-xs text-gray-500 mt-0.5">
                  Our support team is here for you.
                </p>
              </div>
              <button
                onClick={() => navigateTo('contact')}
                className="w-full py-2 bg-white hover:bg-emerald-50 text-[#143628] text-xs font-semibold rounded-xl border border-emerald-200 transition-colors shadow-sm"
              >
                Contact Support
              </button>
            </div>
          </aside>

          {/* MAIN DASHBOARD CONTENT AREA */}
          <main className="lg:col-span-9 space-y-8">
            
            {/* VIEW 1: DEFAULT OVERVIEW / PROFILE TAB (MATCHING MOCKUP) */}
            {(activeAccountTab === 'profile' || activeAccountTab === 'settings') && (
              <>
                {/* Profile Header Box */}
                <div className="bg-white rounded-3xl border border-gray-100 shadow-card p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  
                  <div className="flex items-center gap-4">
                    {/* Circle Avatar "R" */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#EBF5EE] text-[#2D6A4F] border-2 border-emerald-200 flex items-center justify-center text-2xl sm:text-3xl font-bold font-serif shadow-inner">
                      {user.avatarInitials}
                    </div>

                    <div className="space-y-1">
                      <h2 className="text-xl sm:text-2xl font-bold text-[#0F2D1F]">
                        {user.name}
                      </h2>
                      <p className="text-xs sm:text-sm text-gray-500">
                        {user.email}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 pt-0.5">
                        <span>{user.phone}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-emerald-800">
                          <MapPin className="w-3 h-3 text-[#2D6A4F]" />
                          {user.city}, {user.state}, {user.country}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsEditingProfile(!isEditingProfile)}
                    className="flex items-center gap-1.5 px-4 py-2 bg-[#F4F9F5] hover:bg-[#EBF5EE] text-[#143628] text-xs font-semibold rounded-xl border border-emerald-200 transition-all self-end sm:self-center"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                    <span>{isEditingProfile ? 'Cancel Edit' : 'Edit Profile'}</span>
                  </button>
                </div>

                {/* Edit Profile Form (Inline when toggled) */}
                {isEditingProfile && (
                  <form onSubmit={handleSaveProfile} className="bg-white p-6 rounded-3xl border border-emerald-200 shadow-card space-y-4 animate-in slide-in-from-top-4 duration-200">
                    <h3 className="text-sm font-bold text-[#143628]">Update Your Personal Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-gray-600 block mb-1">Full Name</label>
                        <input
                          type="text"
                          value={profileFormData.name}
                          onChange={(e) => setProfileFormData({ ...profileFormData, name: e.target.value })}
                          className="w-full text-xs p-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2D6A4F]"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-600 block mb-1">Email Address</label>
                        <input
                          type="email"
                          value={profileFormData.email}
                          onChange={(e) => setProfileFormData({ ...profileFormData, email: e.target.value })}
                          className="w-full text-xs p-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2D6A4F]"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-600 block mb-1">Phone Number</label>
                        <input
                          type="text"
                          value={profileFormData.phone}
                          onChange={(e) => setProfileFormData({ ...profileFormData, phone: e.target.value })}
                          className="w-full text-xs p-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2D6A4F]"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-600 block mb-1">City</label>
                        <input
                          type="text"
                          value={profileFormData.city}
                          onChange={(e) => setProfileFormData({ ...profileFormData, city: e.target.value })}
                          className="w-full text-xs p-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2D6A4F]"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 pt-2">
                      <button
                        type="button"
                        onClick={() => setIsEditingProfile(false)}
                        className="px-4 py-2 text-xs text-gray-500"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2 bg-[#143628] text-white text-xs font-semibold rounded-xl"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                )}

                {/* 4 Metric Stat Cards (Matching Mockup) */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                  {/* Total Orders */}
                  <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#2D6A4F] flex items-center justify-center flex-shrink-0">
                      <ShoppingBag className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-extrabold text-[#0F2D1F]">
                        {user.stats.totalOrders}
                      </div>
                      <div className="text-xs text-gray-500 font-medium">
                        Total Orders
                      </div>
                    </div>
                  </div>

                  {/* Active Orders */}
                  <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-extrabold text-[#0F2D1F]">
                        {user.stats.activeOrders}
                      </div>
                      <div className="text-xs text-gray-500 font-medium">
                        Active Orders
                      </div>
                    </div>
                  </div>

                  {/* Saved Addresses */}
                  <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-extrabold text-[#0F2D1F]">
                        {user.stats.savedAddresses}
                      </div>
                      <div className="text-xs text-gray-500 font-medium">
                        Saved Addresses
                      </div>
                    </div>
                  </div>

                  {/* Reward Points */}
                  <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                      <Gift className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-extrabold text-[#0F2D1F]">
                        {user.stats.rewardPoints}
                      </div>
                      <div className="text-xs text-gray-500 font-medium">
                        Reward Points
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Orders List (Matching Mockup) */}
                <div className="bg-white rounded-3xl border border-gray-100 shadow-card p-6 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                      <ShoppingBag className="w-5 h-5 text-[#2D6A4F]" />
                      <h3 className="text-base sm:text-lg font-bold text-[#0F2D1F]">
                        Recent Orders
                      </h3>
                    </div>
                    <button
                      onClick={() => setActiveAccountTab('orders')}
                      className="text-xs font-semibold text-[#2D6A4F] hover:text-[#143628] flex items-center gap-1 hover:underline"
                    >
                      <span>View All Orders</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="space-y-3.5">
                    {user.orders.slice(0, 3).map((order) => {
                      const isDelivered = order.status === 'Delivered';
                      const isOutForDelivery = order.status === 'Out for Delivery';
                      const isCancelled = order.status === 'Cancelled';

                      return (
                        <div
                          key={order.id}
                          className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 rounded-2xl bg-[#FBFDFB] border border-gray-100 hover:border-emerald-100 transition-colors gap-4"
                        >
                          <div className="flex items-center gap-4">
                            {/* Order thumbnail image */}
                            <div className="w-14 h-14 rounded-xl bg-gray-100 overflow-hidden flex-shrink-0 border border-gray-200">
                              <img
                                src={
                                  order.id === 'ORG123456'
                                    ? 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=150&q=80'
                                    : order.id === 'ORG123455'
                                    ? 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=150&q=80'
                                    : 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=150&q=80'
                                }
                                alt="Order thumbnail"
                                className="w-full h-full object-cover"
                              />
                            </div>

                            <div className="space-y-0.5">
                              <div className="text-sm font-bold text-[#143628]">
                                Order #{order.id}
                              </div>
                              <div className="text-xs text-gray-500">
                                {order.date}
                              </div>
                              <div className="text-xs text-gray-600 font-medium">
                                {order.itemsCount} Items <span className="text-gray-300">|</span>{' '}
                                <strong className="text-gray-900">₹{order.totalAmount}</strong>
                              </div>
                            </div>
                          </div>

                          {/* Status Pill */}
                          <div className="flex flex-col md:items-end">
                            <div className="flex items-center gap-1.5">
                              <span
                                className={`w-2 h-2 rounded-full ${
                                  isDelivered
                                    ? 'bg-emerald-500'
                                    : isOutForDelivery
                                    ? 'bg-amber-500 animate-pulse'
                                    : 'bg-gray-400'
                                }`}
                              />
                              <span
                                className={`text-xs font-bold ${
                                  isDelivered
                                    ? 'text-emerald-700'
                                    : isOutForDelivery
                                    ? 'text-amber-700'
                                    : 'text-gray-600'
                                }`}
                              >
                                {order.status}
                              </span>
                            </div>
                            <span className="text-[11px] text-gray-500 mt-0.5">
                              {order.deliveryDate}
                            </span>
                          </div>

                          {/* Action Button */}
                          <div className="self-end md:self-center">
                            {isDelivered ? (
                              <button
                                onClick={() => {
                                  addToCart(products[4], 1);
                                  addToast('Added items from Order #' + order.id + ' to your cart!', 'success');
                                }}
                                className="px-4 py-2 bg-white hover:bg-emerald-50 text-[#143628] text-xs font-semibold rounded-xl border border-gray-200 hover:border-[#143628] transition-colors flex items-center gap-1"
                              >
                                <span>Buy Again</span>
                                <ChevronRight className="w-3.5 h-3.5" />
                              </button>
                            ) : isOutForDelivery ? (
                              <button
                                onClick={() => openOrderTracking(order.id)}
                                className="px-4 py-2 bg-[#143628] hover:bg-[#2D6A4F] text-white text-xs font-semibold rounded-xl transition-colors flex items-center gap-1 shadow-sm"
                              >
                                <span>Track Order</span>
                                <ChevronRight className="w-3.5 h-3.5" />
                              </button>
                            ) : (
                              <button
                                onClick={() => openOrderTracking(order.id)}
                                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-xl transition-colors flex items-center gap-1"
                              >
                                <span>View Details</span>
                                <ChevronRight className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Track Your Order Box (Matching Mockup) */}
                <div className="bg-white rounded-3xl border border-gray-100 shadow-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Compass className="w-5 h-5 text-[#2D6A4F]" />
                    <h3 className="text-base font-bold text-[#0F2D1F]">
                      Track Your Order
                    </h3>
                  </div>

                  <form onSubmit={handleTrackSubmit} className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="text"
                      value={trackInputId}
                      onChange={(e) => setTrackInputId(e.target.value)}
                      placeholder="Enter your order ID (e.g. ORG123456)"
                      className="flex-1 text-xs sm:text-sm border border-gray-200 rounded-2xl px-4 py-3 uppercase placeholder:normal-case focus:outline-none focus:border-[#2D6A4F]"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-[#143628] hover:bg-[#2D6A4F] text-white text-xs sm:text-sm font-semibold rounded-2xl transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <Compass className="w-4 h-4" />
                      <span>Track Order</span>
                    </button>
                  </form>
                </div>

                {/* 2-Column: My Addresses & Payment Methods (Matching Mockup) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Left Column: My Addresses */}
                  <div className="bg-white rounded-3xl border border-gray-100 shadow-card p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-[#2D6A4F]" />
                          <h3 className="text-sm font-bold text-[#0F2D1F]">
                            My Addresses
                          </h3>
                        </div>
                        <button
                          onClick={() => setActiveAccountTab('addresses')}
                          className="text-xs text-[#2D6A4F] hover:underline font-semibold flex items-center gap-1"
                        >
                          <span>Manage Addresses</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Primary Default Address Card */}
                      <div className="mt-4 p-4 rounded-2xl bg-[#FBFDFB] border border-emerald-100 relative">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                            Default
                          </span>
                          <div className="flex items-center gap-1 text-gray-400">
                            <button
                              onClick={() => setActiveAccountTab('addresses')}
                              className="p-1 hover:text-[#143628]"
                              title="Edit address"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        <div className="space-y-1">
                          <h4 className="text-xs font-bold text-[#0F2D1F]">
                            {user.addresses[0]?.name}
                          </h4>
                          <p className="text-xs text-gray-600 leading-relaxed">
                            {user.addresses[0]?.line1}, {user.addresses[0]?.area}, {user.addresses[0]?.city} - {user.addresses[0]?.pincode}, {user.addresses[0]?.state}
                          </p>
                          <p className="text-xs text-gray-500 pt-1">
                            📞 {user.addresses[0]?.phone}
                          </p>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setActiveAccountTab('addresses');
                        setIsAddingAddress(true);
                      }}
                      className="mt-4 w-full py-2.5 bg-[#F4F9F5] hover:bg-[#EBF5EE] text-[#143628] text-xs font-semibold rounded-xl border border-emerald-200 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add New Address</span>
                    </button>
                  </div>

                  {/* Right Column: Payment Methods */}
                  <div className="bg-white rounded-3xl border border-gray-100 shadow-card p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                        <div className="flex items-center gap-2">
                          <CreditCard className="w-4 h-4 text-[#2D6A4F]" />
                          <h3 className="text-sm font-bold text-[#0F2D1F]">
                            Payment Methods
                          </h3>
                        </div>
                        <button
                          onClick={() => setActiveAccountTab('payments')}
                          className="text-xs text-[#2D6A4F] hover:underline font-semibold flex items-center gap-1"
                        >
                          <span>Manage</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Payment items matching mockup */}
                      <div className="mt-4 space-y-2.5">
                        {/* UPI item */}
                        <div className="p-3 bg-[#FBFDFB] rounded-2xl border border-gray-100 flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <span className="px-2 py-0.5 bg-emerald-100 text-[#143628] text-[10px] font-bold rounded">
                              UPI
                            </span>
                            <span className="text-xs font-medium text-gray-800">
                              {user.paymentMethods[0]?.label}
                            </span>
                          </div>
                          <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            Default
                          </span>
                        </div>

                        {/* Card item */}
                        <div className="p-3 bg-[#FBFDFB] rounded-2xl border border-gray-100 flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <span className="px-2 py-0.5 bg-red-100 text-red-800 text-[10px] font-bold rounded">
                              Card
                            </span>
                            <span className="text-xs font-medium text-gray-800">
                              •••• 4321
                            </span>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveAccountTab('payments')}
                      className="mt-4 w-full py-2.5 bg-[#F4F9F5] hover:bg-[#EBF5EE] text-[#143628] text-xs font-semibold rounded-xl border border-emerald-200 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add New Payment Method</span>
                    </button>
                  </div>

                </div>

                {/* 4 Quick Links Cards (Matching Mockup) */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-4 flex items-center gap-1.5">
                    <span>📄</span> Quick Links
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    
                    {/* Shipping Policy */}
                    <div
                      onClick={() => onOpenPolicy && onOpenPolicy('Shipping Policy')}
                      className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-between group"
                    >
                      <div>
                        <h5 className="text-xs sm:text-sm font-bold text-[#0F2D1F] group-hover:text-[#2D6A4F] transition-colors">
                          Shipping Policy
                        </h5>
                        <p className="text-[11px] text-gray-500">Delivery information</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#2D6A4F] group-hover:translate-x-1 transition-all" />
                    </div>

                    {/* Return & Refund */}
                    <div
                      onClick={() => onOpenPolicy && onOpenPolicy('Return & Refund')}
                      className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-between group"
                    >
                      <div>
                        <h5 className="text-xs sm:text-sm font-bold text-[#0F2D1F] group-hover:text-[#2D6A4F] transition-colors">
                          Return & Refund
                        </h5>
                        <p className="text-[11px] text-gray-500">Easy returns</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#2D6A4F] group-hover:translate-x-1 transition-all" />
                    </div>

                    {/* Terms & Conditions */}
                    <div
                      onClick={() => onOpenPolicy && onOpenPolicy('Terms & Conditions')}
                      className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-between group"
                    >
                      <div>
                        <h5 className="text-xs sm:text-sm font-bold text-[#0F2D1F] group-hover:text-[#2D6A4F] transition-colors">
                          Terms & Conditions
                        </h5>
                        <p className="text-[11px] text-gray-500">Our policies</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#2D6A4F] group-hover:translate-x-1 transition-all" />
                    </div>

                    {/* Privacy Policy */}
                    <div
                      onClick={() => onOpenPolicy && onOpenPolicy('Privacy Policy')}
                      className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-between group"
                    >
                      <div>
                        <h5 className="text-xs sm:text-sm font-bold text-[#0F2D1F] group-hover:text-[#2D6A4F] transition-colors">
                          Privacy Policy
                        </h5>
                        <p className="text-[11px] text-gray-500">Your data is safe</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#2D6A4F] group-hover:translate-x-1 transition-all" />
                    </div>

                  </div>
                </div>
              </>
            )}

            {/* VIEW 2: ORDERS TAB */}
            {activeAccountTab === 'orders' && (
              <div className="bg-white rounded-3xl border border-gray-100 shadow-card p-6 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div>
                    <h3 className="text-lg font-bold text-[#0F2D1F]">All Orders</h3>
                    <p className="text-xs text-gray-500">Complete record of your purchases</p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-emerald-50 text-[#2D6A4F] rounded-full">
                    {user.orders.length} Orders
                  </span>
                </div>

                <div className="space-y-4">
                  {user.orders.map((order) => (
                    <div key={order.id} className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <span className="text-sm font-bold text-[#143628]">Order #{order.id}</span>
                          <span className="text-xs text-gray-500 block">{order.date}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                            {order.status}
                          </span>
                          <span className="text-sm font-extrabold text-[#0F2D1F]">₹{order.totalAmount}</span>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-gray-200/60 flex items-center justify-between text-xs">
                        <span className="text-gray-500">{order.deliveryDate}</span>
                        <button
                          onClick={() => openOrderTracking(order.id)}
                          className="font-bold text-[#2D6A4F] hover:underline"
                        >
                          Track Package →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* VIEW 3: WISHLIST TAB */}
            {activeAccountTab === 'wishlist' && (
              <div className="bg-white rounded-3xl border border-gray-100 shadow-card p-6 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div>
                    <h3 className="text-lg font-bold text-[#0F2D1F]">My Wishlist</h3>
                    <p className="text-xs text-gray-500">Items you have saved for later</p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-emerald-50 text-[#2D6A4F] rounded-full">
                    {wishlistedProducts.length} Items
                  </span>
                </div>

                {wishlistedProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {wishlistedProducts.map((p) => (
                      <div key={p.id} className="p-3 bg-white rounded-2xl border border-gray-200 flex flex-col justify-between shadow-sm">
                        <img src={p.image} alt={p.name} className="w-full h-32 object-cover rounded-xl mb-2" />
                        <div>
                          <div className="text-sm font-bold text-gray-900">{p.name}</div>
                          <div className="text-xs text-gray-500 font-marathi">{p.marathiName}</div>
                          <div className="text-sm font-bold text-[#2D6A4F] mt-1">₹{p.price}/{p.unit}</div>
                        </div>
                        <button
                          onClick={() => addToCart(p, 1)}
                          className="mt-3 w-full py-2 bg-[#143628] hover:bg-[#2D6A4F] text-white text-xs font-semibold rounded-xl"
                        >
                          Move to Cart
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10 text-gray-500 text-xs">
                    Your wishlist is empty. Browse products and tap the heart icon to save!
                  </div>
                )}
              </div>
            )}

            {/* VIEW 4: ADDRESSES MANAGEMENT TAB */}
            {activeAccountTab === 'addresses' && (
              <div className="bg-white rounded-3xl border border-gray-100 shadow-card p-6 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div>
                    <h3 className="text-lg font-bold text-[#0F2D1F]">Saved Addresses</h3>
                    <p className="text-xs text-gray-500">Manage delivery locations for quick checkout</p>
                  </div>
                  <button
                    onClick={() => setIsAddingAddress(!isAddingAddress)}
                    className="px-3 py-1.5 bg-[#143628] text-white text-xs font-semibold rounded-xl flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add New</span>
                  </button>
                </div>

                {/* Add new address inline form */}
                {isAddingAddress && (
                  <form onSubmit={handleSaveNewAddress} className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-3">
                    <h4 className="text-xs font-bold text-[#143628]">Add New Delivery Address</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div>
                        <label className="text-gray-600 block mb-0.5">Address Tag</label>
                        <select
                          value={newAddressForm.tag}
                          onChange={(e) => setNewAddressForm({ ...newAddressForm, tag: e.target.value })}
                          className="w-full p-2 rounded-lg border border-gray-300"
                        >
                          <option value="Home">Home</option>
                          <option value="Office">Office</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-gray-600 block mb-0.5">Full Name</label>
                        <input
                          type="text"
                          value={newAddressForm.name}
                          onChange={(e) => setNewAddressForm({ ...newAddressForm, name: e.target.value })}
                          className="w-full p-2 rounded-lg border border-gray-300"
                          required
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="text-gray-600 block mb-0.5">Address Line 1 (Flat, Society, Street)</label>
                        <input
                          type="text"
                          value={newAddressForm.line1}
                          onChange={(e) => setNewAddressForm({ ...newAddressForm, line1: e.target.value })}
                          className="w-full p-2 rounded-lg border border-gray-300"
                          placeholder="e.g. Flat 302, Green Acre Apartments"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-gray-600 block mb-0.5">Locality / Area</label>
                        <input
                          type="text"
                          value={newAddressForm.area}
                          onChange={(e) => setNewAddressForm({ ...newAddressForm, area: e.target.value })}
                          className="w-full p-2 rounded-lg border border-gray-300"
                          placeholder="e.g. Kothrud"
                        />
                      </div>
                      <div>
                        <label className="text-gray-600 block mb-0.5">Pincode</label>
                        <input
                          type="text"
                          value={newAddressForm.pincode}
                          onChange={(e) => setNewAddressForm({ ...newAddressForm, pincode: e.target.value })}
                          className="w-full p-2 rounded-lg border border-gray-300"
                          placeholder="e.g. 411038"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 pt-2">
                      <button
                        type="button"
                        onClick={() => setIsAddingAddress(false)}
                        className="px-3 py-1.5 text-xs text-gray-500"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-1.5 bg-[#143628] text-white text-xs font-semibold rounded-lg"
                      >
                        Save Address
                      </button>
                    </div>
                  </form>
                )}

                <div className="space-y-3">
                  {user.addresses.map((addr) => (
                    <div key={addr.id} className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex justify-between items-start">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-gray-900">{addr.name}</span>
                          <span className="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full">
                            {addr.tag}
                          </span>
                          {addr.isDefault && (
                            <span className="text-[10px] bg-[#143628] text-white font-semibold px-2 py-0.5 rounded-full">
                              Default
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-600">{addr.line1}, {addr.area}, {addr.city} - {addr.pincode}</p>
                        <p className="text-xs text-gray-500">Phone: {addr.phone}</p>
                      </div>
                      {user.addresses.length > 1 && (
                        <button
                          onClick={() => deleteAddress(addr.id)}
                          className="text-gray-400 hover:text-red-500 p-1"
                          title="Delete address"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* VIEW 5: PAYMENTS TAB */}
            {activeAccountTab === 'payments' && (
              <div className="bg-white rounded-3xl border border-gray-100 shadow-card p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div>
                    <h3 className="text-lg font-bold text-[#0F2D1F]">Saved Payment Methods</h3>
                    <p className="text-xs text-gray-500">Fast checkout with saved UPI IDs and Cards</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {user.paymentMethods.map((pm) => (
                    <div key={pm.id} className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center font-bold text-xs text-[#143628]">
                          {pm.provider}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-900">{pm.label}</div>
                          {pm.expiry && <div className="text-[11px] text-gray-500">Expires {pm.expiry}</div>}
                        </div>
                      </div>
                      {pm.isDefault && (
                        <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                          Default
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* VIEW 6: ORDER TRACKING TAB */}
            {activeAccountTab === 'tracking' && (
              <div className="bg-white rounded-3xl border border-gray-100 shadow-card p-6 space-y-4">
                <h3 className="text-lg font-bold text-[#0F2D1F]">Track Shipment</h3>
                <p className="text-xs text-gray-500">Enter order number below or track current active order</p>
                <form onSubmit={handleTrackSubmit} className="flex gap-2">
                  <input
                    type="text"
                    value={trackInputId}
                    onChange={(e) => setTrackInputId(e.target.value)}
                    placeholder="e.g. ORG123455"
                    className="flex-1 text-xs border border-gray-200 rounded-xl px-3 py-2 uppercase"
                  />
                  <button type="submit" className="px-5 py-2 bg-[#143628] text-white text-xs font-semibold rounded-xl">
                    Track
                  </button>
                </form>
              </div>
            )}

          </main>

        </div>
      </div>

      {/* WhatsApp Banner */}
      <WhatsAppBanner />

    </div>
  );
}
