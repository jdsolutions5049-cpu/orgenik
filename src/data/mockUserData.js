export const INITIAL_USER = {
  name: 'Rohan Patil',
  email: 'rohanpatil123@gmail.com',
  phone: '+91 98765 43210',
  city: 'Pune',
  state: 'Maharashtra',
  country: 'India',
  avatarInitials: 'R',
  stats: {
    totalOrders: 5,
    activeOrders: 2,
    savedAddresses: 3,
    rewardPoints: 120
  },
  addresses: [
    {
      id: 'addr-1',
      name: 'Rohan Patil',
      tag: 'Home',
      isDefault: true,
      line1: 'Flat No. 101, Sai Residency',
      area: 'Wagholi',
      city: 'Pune',
      pincode: '412207',
      state: 'Maharashtra',
      country: 'India',
      phone: '+91 98765 43210'
    },
    {
      id: 'addr-2',
      name: 'Rohan Patil',
      tag: 'Office',
      isDefault: false,
      line1: 'EON Free Zone, Cluster D, 4th Floor',
      area: 'Kharadi',
      city: 'Pune',
      pincode: '411014',
      state: 'Maharashtra',
      country: 'India',
      phone: '+91 98765 43210'
    },
    {
      id: 'addr-3',
      name: 'Rohan Patil',
      tag: 'Parental Home',
      isDefault: false,
      line1: 'Lane 4, Near Ganpati Temple',
      area: 'Vishrambag',
      city: 'Sangli',
      pincode: '416415',
      state: 'Maharashtra',
      country: 'India',
      phone: '+91 98765 43210'
    }
  ],
  paymentMethods: [
    {
      id: 'pay-1',
      type: 'upi',
      label: 'rohanpatil123@okaxis',
      provider: 'UPI',
      isDefault: true
    },
    {
      id: 'pay-2',
      type: 'card',
      label: 'Mastercard ending in 4321',
      last4: '4321',
      provider: 'Mastercard',
      expiry: '09/28',
      isDefault: false
    }
  ],
  orders: [
    {
      id: 'ORG123456',
      date: '12 Sep 2026, 10:30 AM',
      itemsCount: 5,
      totalAmount: 520,
      status: 'Delivered',
      deliveryDate: 'Delivered on 15 Sep 2026',
      items: [
        { name: 'Ambemohar Rice', qty: 2, price: 80, unit: 'kg' },
        { name: 'Tur Dal', qty: 2, price: 110, unit: 'kg' },
        { name: 'Salem Turmeric Powder', qty: 1, price: 140, unit: '500g' }
      ],
      trackingSteps: [
        { title: 'Order Confirmed', date: '12 Sep 2026, 10:35 AM', completed: true },
        { title: 'Packed at Pune Farm Warehouse', date: '12 Sep 2026, 04:00 PM', completed: true },
        { title: 'In Transit with Express Logistics', date: '13 Sep 2026, 09:15 AM', completed: true },
        { title: 'Out for Delivery (Wagholi Hub)', date: '15 Sep 2026, 08:30 AM', completed: true },
        { title: 'Delivered to Rohan Patil', date: '15 Sep 2026, 01:20 PM', completed: true }
      ]
    },
    {
      id: 'ORG123455',
      date: '05 Sep 2026, 04:20 PM',
      itemsCount: 3,
      totalAmount: 280,
      status: 'Out for Delivery',
      deliveryDate: 'Expected by 08 Sep 2026',
      items: [
        { name: 'Bajra (Pearl Millet)', qty: 2, price: 40, unit: 'kg' },
        { name: 'Ragi (Nachni)', qty: 2, price: 60, unit: 'kg' },
        { name: 'Jowar', qty: 1, price: 45, unit: 'kg' }
      ],
      trackingSteps: [
        { title: 'Order Confirmed', date: '05 Sep 2026, 04:22 PM', completed: true },
        { title: 'Quality Graded & Packed', date: '06 Sep 2026, 11:00 AM', completed: true },
        { title: 'Dispatched from Farmer Center', date: '06 Sep 2026, 05:45 PM', completed: true },
        { title: 'Out for Delivery (Driver: Santosh)', date: 'Today, 08:15 AM', completed: true, current: true },
        { title: 'Delivered', date: 'Pending', completed: false }
      ]
    },
    {
      id: 'ORG123430',
      date: '28 Aug 2026, 11:15 AM',
      itemsCount: 4,
      totalAmount: 430,
      status: 'Cancelled',
      deliveryDate: 'Cancelled on 29 Aug 2026',
      items: [
        { name: 'Natural Jaggery Powder', qty: 2, price: 90, unit: 'kg' },
        { name: 'White Sesame (Til)', qty: 1, price: 190, unit: 'kg' },
        { name: 'Bajra', qty: 1, price: 40, unit: 'kg' }
      ],
      trackingSteps: [
        { title: 'Order Placed', date: '28 Aug 2026, 11:15 AM', completed: true },
        { title: 'Cancelled by User (Address modification)', date: '29 Aug 2026, 09:10 AM', completed: true, cancelled: true },
        { title: 'Refund of ₹430 processed to UPI', date: '29 Aug 2026, 10:15 AM', completed: true }
      ]
    }
  ]
};
