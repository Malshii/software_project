// side bar routes according to the user type

export const user_menu_config = [
  { name: 'Dashboard', to: '/dashboard'},
  { name: 'My Profile', to: '/#'},
  { name: 'Messages', to: '/#'},
  { name: 'Scheduling', to: '/#'},
  { name: 'Reports', to: '/#'},
  { name: 'Promotions', to: '/#'},
  { name: 'Upload Documents', to: '/#'},
  { name: 'History', to: '/#'},
  { name: 'Settings', to: '/#'},
  { name: 'About', to: '/#'},
  { name: 'Helps & Services', to: '/#'},
];

export const doctor_menu_config = [
    { name: 'Dashboard', to: '/dashboard'},
    { name: 'My Profile', to: '/#'},
    { name: 'Messages', to: '/#'},
    { name: 'Salary sheet', to: '/#'},
    { name: 'Statistics', to: '/#'},
    { name: 'History', to: '/#'},
    { name: 'Settings', to: '/#'},
    { name: 'About', to: '/#'},
    { name: 'Help & Services', to: '/#'},    
];

export const admin_menu_config = [
    { name: 'Dashboard', to: '/dashboard'},
    { name: 'My Profile', to: '/#'},
    { name: 'Messages', to: '/#'},
    { name: 'Scheduling', to: '/#'},
    { name: 'Reports', to: '/#'},
    { name: 'Promotions', to: '/#'},
    { name: 'Upload Documents', to: '/#'},
    { name: 'History', to: '/#'},
    { name: 'Settings', to: '/#'},
    { name: 'About', to: '/#'},
    { name: 'Helps & Services', to: '/#'},
];

/*
export const waiter_menu_config = [
  { name: 'Home', to: '/', icon: <HomeIcon /> },
  {
    name: 'Restaurant',    
    sub: [
      { name: 'Food & Beverages', to: '/foods' },
      { name: 'Special offers', to: '/offers' },
      { name: 'Reservations', to: '/reservations' },
    ],
  },
  {
    name: 'Hotel',
    icon: <HotelIcon />,
    sub: [{ name: 'Rooms', to: '/rooms' }],
  },
];

export const receptionist_menu_config = [
  { name: 'Home', to: '/', icon: <HomeIcon /> },
  {
    name: 'Restaurant',
    icon: <RestaurantMenuIcon />,
    sub: [
      { name: 'Food & Beverages', to: '/foods' },
      { name: 'Special offers', to: '/offers' },
    ],
  },
  {
    name: 'Hotel',
    icon: <HotelIcon />,
    sub: [
      { name: 'Rooms', to: '/rooms' },
      { name: 'Book Now', to: '/book-now' },
      { name: 'Bookings', to: '/bookings' },
    ],
  },  
];


export default menu_config;*/
