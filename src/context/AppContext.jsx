import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../data/products';
import { INITIAL_USER } from '../data/mockUserData';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Navigation
  const [currentPage, setCurrentPage] = useState('home');
  const [pageParams, setPageParams] = useState({});

  // Language: 'en' (English) or 'mr' (Marathi)
  const [language, setLanguage] = useState('en');

  // Search
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Filter state for Shop / Products
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState(700);
  const [inStockOnly, setInStockOnly] = useState(true);
  const [selectedForms, setSelectedForms] = useState([]);
  const [sortBy, setSortBy] = useState('popular');

  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [trackingModalOrder, setTrackingModalOrder] = useState(null);
  const [activeAccountTab, setActiveAccountTab] = useState('profile');
  const [selectedBlogPost, setSelectedBlogPost] = useState(null);

  // Cart state - loaded from localStorage or initial demo cart
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('orgenik_cart');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    // Default initial items to match the mockup header showing cart items
    return [
      { id: 'prod-1', product: PRODUCTS[0], quantity: 2 },
      { id: 'prod-5', product: PRODUCTS[4], quantity: 1 }
    ];
  });

  // Wishlist state
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('orgenik_wishlist');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return ['prod-1', 'prod-5', 'prod-6'];
  });

  // User state
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('orgenik_user');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return INITIAL_USER;
  });

  // Toast notifications
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'success') => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  };

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem('orgenik_cart', JSON.stringify(cart));
    } catch (e) {}
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('orgenik_wishlist', JSON.stringify(wishlist));
    } catch (e) {}
  }, [wishlist]);

  useEffect(() => {
    try {
      localStorage.setItem('orgenik_user', JSON.stringify(user));
    } catch (e) {}
  }, [user]);

  // Navigate helper
  const navigateTo = (page, params = {}) => {
    setCurrentPage(page);
    setPageParams(params);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cart actions
  const addToCart = (product, quantity = 1, showFeedback = true) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { id: product.id, product, quantity }];
    });
    if (showFeedback) {
      addToast(`Added ${product.name} (${product.marathiName}) to your cart! 🌾`, 'success');
    }
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
    addToast('Item removed from cart', 'info');
  };

  const updateCartQuantity = (productId, delta) => {
    setCart(prev => {
      return prev
        .map(item => {
          if (item.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const freeShippingThreshold = 999;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cartTotal);

  // Wishlist actions
  const toggleWishlist = (productId) => {
    const isSaved = wishlist.includes(productId);
    const prod = PRODUCTS.find(p => p.id === productId);
    const prodName = prod ? prod.name : 'Item';

    if (isSaved) {
      setWishlist(prev => prev.filter(id => id !== productId));
      addToast(`Removed ${prodName} from Wishlist`, 'info');
    } else {
      setWishlist(prev => [...prev, productId]);
      addToast(`Added ${prodName} to Wishlist ❤️`, 'success');
    }
  };

  const isWishlisted = (productId) => wishlist.includes(productId);

  // Address management
  const addAddress = (newAddr) => {
    const id = 'addr-' + Date.now();
    const addressWithId = { ...newAddr, id, isDefault: user.addresses.length === 0 };
    setUser(prev => ({
      ...prev,
      addresses: [...prev.addresses, addressWithId],
      stats: { ...prev.stats, savedAddresses: prev.addresses.length + 1 }
    }));
    addToast('Address added successfully!', 'success');
  };

  const deleteAddress = (addressId) => {
    setUser(prev => ({
      ...prev,
      addresses: prev.addresses.filter(a => a.id !== addressId),
      stats: { ...prev.stats, savedAddresses: Math.max(0, prev.addresses.length - 1) }
    }));
    addToast('Address deleted', 'info');
  };

  const setDefaultAddress = (addressId) => {
    setUser(prev => ({
      ...prev,
      addresses: prev.addresses.map(a => ({
        ...a,
        isDefault: a.id === addressId
      }))
    }));
    addToast('Default address updated', 'success');
  };

  // Payment methods
  const addPaymentMethod = (pm) => {
    const id = 'pay-' + Date.now();
    setUser(prev => ({
      ...prev,
      paymentMethods: [...prev.paymentMethods, { ...pm, id, isDefault: prev.paymentMethods.length === 0 }]
    }));
    addToast('Payment method saved', 'success');
  };

  const deletePaymentMethod = (id) => {
    setUser(prev => ({
      ...prev,
      paymentMethods: prev.paymentMethods.filter(p => p.id !== id)
    }));
    addToast('Payment method removed', 'info');
  };

  // Order Placement
  const placeOrder = (orderOptions = {}) => {
    const newOrderId = 'ORG' + Math.floor(100000 + Math.random() * 900000);
    const newOrder = {
      id: newOrderId,
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) + ', ' + new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      itemsCount: cartCount,
      totalAmount: cartTotal,
      status: 'Out for Delivery',
      deliveryDate: 'Expected in 2-3 days',
      items: cart.map(i => ({
        name: i.product.name,
        qty: i.quantity,
        price: i.product.price,
        unit: i.product.unit
      })),
      trackingSteps: [
        { title: 'Order Confirmed', date: 'Just now', completed: true, current: true },
        { title: 'Packaging & Quality Check', date: 'Pending', completed: false },
        { title: 'Dispatched from Farmer Center', date: 'Pending', completed: false },
        { title: 'Out for Delivery', date: 'Pending', completed: false },
        { title: 'Delivered', date: 'Pending', completed: false }
      ]
    };

    setUser(prev => ({
      ...prev,
      orders: [newOrder, ...prev.orders],
      stats: {
        ...prev.stats,
        totalOrders: prev.stats.totalOrders + 1,
        activeOrders: prev.stats.activeOrders + 1,
        rewardPoints: prev.stats.rewardPoints + Math.floor(cartTotal / 10)
      }
    }));

    clearCart();
    setIsCartOpen(false);
    addToast(`🎉 Order #${newOrderId} placed successfully!`, 'success');
    return newOrderId;
  };

  // Track order helper
  const openOrderTracking = (orderId) => {
    const found = user.orders.find(o => o.id.toUpperCase() === orderId.trim().toUpperCase());
    if (found) {
      setTrackingModalOrder(found);
    } else {
      // Create a simulated tracking detail if user types any generic order
      setTrackingModalOrder({
        id: orderId.toUpperCase(),
        date: 'Today',
        itemsCount: 2,
        totalAmount: 390,
        status: 'In Transit',
        deliveryDate: 'Expected in 2 business days',
        items: [{ name: 'Native Farm Grains', qty: 2, price: 195, unit: 'kg' }],
        trackingSteps: [
          { title: 'Order Confirmed', date: 'Today, 09:00 AM', completed: true },
          { title: 'Cleaned, Graded & Vacuum Packed', date: 'Today, 11:30 AM', completed: true },
          { title: 'Dispatched from Pune Hub', date: 'Today, 02:45 PM', completed: true, current: true },
          { title: 'Out for Delivery', date: 'Tomorrow', completed: false },
          { title: 'Delivered', date: 'Tomorrow evening', completed: false }
        ]
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        // Nav & Routing
        currentPage,
        pageParams,
        navigateTo,
        language,
        setLanguage,

        // Products & Filters
        products: PRODUCTS,
        selectedCategory,
        setSelectedCategory,
        priceRange,
        setPriceRange,
        inStockOnly,
        setInStockOnly,
        selectedForms,
        setSelectedForms,
        sortBy,
        setSortBy,
        searchQuery,
        setSearchQuery,
        isSearchOpen,
        setIsSearchOpen,

        // Cart
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        cartTotal,
        cartCount,
        isCartOpen,
        setIsCartOpen,
        freeShippingThreshold,
        remainingForFreeShipping,

        // Wishlist
        wishlist,
        toggleWishlist,
        isWishlisted,

        // User & Orders
        user,
        setUser,
        addAddress,
        deleteAddress,
        setDefaultAddress,
        addPaymentMethod,
        deletePaymentMethod,
        placeOrder,
        activeAccountTab,
        setActiveAccountTab,

        // Modals & Popups
        quickViewProduct,
        setQuickViewProduct,
        trackingModalOrder,
        setTrackingModalOrder,
        openOrderTracking,
        selectedBlogPost,
        setSelectedBlogPost,

        // Toast notifications
        toasts,
        addToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
