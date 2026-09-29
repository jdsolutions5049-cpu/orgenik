# Orgenik - Traditional Foods Web Application

A complete, responsive e-commerce web application for **Orgenik - Traditional Foods**, built based on the custom UI mockups.

## 🌿 Brand & Design System

- **Theme:** Organic, earthy, and modern Indian traditional food store.
- **Color Palette:**
  - Primary Dark Green: `#143628` (Header, Footer, Primary buttons)
  - Accent / Vibrant Green: `#2D6A4F`
  - Light Organic Green: `#EBF5EE` (Backgrounds, subtle tints)
  - CTA / Primary Accent: `#E65C00` / `#FF7A00` (Action buttons)
  - Background: `#FBFDFB` / White (`#FFFFFF`)
  - Text: `#1F2937` (Body), `#0F2D1F` (Headings)
- **Typography:** Serif for headings (`Playfair Display`), clean Sans-serif for body/UI (`Poppins`, `Inter`), and `Noto Sans Devanagari` for bilingual Marathi text.
- **Bilingual Text Support:** English & Marathi titles across all product cards, category descriptions, and an interactive language switcher toggle in the top bar.

---

## 🚀 Key Features & Pages

### 1. Header & Navigation
- **Top Bar:** Free shipping threshold tracker ("Free shipping on orders above ₹999 | 100% Natural & Native Products | Direct from Farmers"), quick links for Order Tracking, Help, User Profile, and Language Switcher (`English` / `मराठी`).
- **Navbar:** Organic leaf brand mark, live search bar with real-time autocompletion, category dropdown with product counters, wishlist shortcut, user avatar, and cart badge with dynamic count.

### 2. Homepage
- **Hero Section:** "Fresh Traditional Foods, Live Healthy" with dual CTAs (*Shop Products*, *Explore Our Story*), social proof user avatars, and 4.8★ rating proof.
- **Value Props:** 4 icon pillars (*Farmer Sourced*, *Traditional & Authentic*, *Quality Delivery*, *Supporting Farmers*).
- **Categories Showcase:** Visual circular/card grid with high-resolution imagery and direct category deep-links.
- **Popular Products Grid:** 4-column product cards with dual-language titles (e.g. *Bajra / बाजरी*), price per kg, strikethrough MRP, ratings, wishlist toggle, and dual actions (*Add to Cart* & *Buy Now*).
- **Our Story Feature:** Highlighting farmer heritage with authentic farmer couple photography and quality guarantees.
- **Why Choose Us & Reviews:** Trust metrics (*10,000+ Happy Families*, *50+ Traditional Products*, *100+ Farmer Partners*, *20+ States*) and customer review card (*Priya Sharma*).
- **Blog Section:** Featured health articles and recipe highlights.
- **WhatsApp Direct Support Banner:** Integrated WhatsApp floating/banner help line.

### 3. Shop / Product Listing Page
- **Filter Sidebar:**
  - Category selector with live product counters.
  - Interactive price range slider (₹0 – ₹700).
  - Stock availability filters (*In Stock*, *Out of Stock*).
  - Product Form checkboxes (*Whole*, *Split / Dal*, *Powder*, *Seeds*).
- **Main Grid:**
  - Real-time filtered product cards.
  - Sort by Popularity, Price (Low to High), Price (High to Low), and Top Rated.
  - Pagination controls.

### 4. Categories Page
- Matches UI mockup with 7 curated category cards (*Millets & Grains*, *Rice Varieties*, *Pulses & Legumes*, *Oilseeds*, *Spices*, *Processed Foods*, *All Products*).
- Mission banner (*"Pure Food. Stronger Farmers. Healthier India"*).
- Why Shop by Category benefit cards.

### 5. My Account / User Dashboard
- **Profile Header:** Avatar "R", *Rohan Patil*, email, phone, location (*Pune, Maharashtra*), and editable profile details.
- **4 Metric Overview Cards:** Total Orders (5), Active Orders (2), Saved Addresses (3), Reward Points (120).
- **Recent Orders List:** Delivery status chips (*Delivered*, *Out for Delivery*, *Cancelled*), with *Buy Again* and *Track Order* actions.
- **Track Your Order:** Live order ID search and interactive 5-stage shipment journey timeline.
- **Saved Addresses:** Manage and add delivery addresses with *Default* chip.
- **Saved Payment Methods:** Saved UPI and Mastercard cards.
- **Quick Links:** Interactive modals for *Shipping Policy*, *Return & Refund*, *Terms & Conditions*, and *Privacy Policy*.

### 6. Interactive Modals & Drawers
- **Cart Drawer:** Quantity stepper, trash removal, free shipping progress bar, promo code input (*ORGENIK10*), price calculation, and one-click order placement.
- **Quick View Modal:** Dynamic pack size selector (500g, 1kg, 2kg, 5kg), nutritional breakdown, farmer origin details, and direct purchase.
- **Order Tracking Modal:** Interactive step-by-step shipment timeline from Pune grading facility to doorstep delivery.
- **Toast Notifications:** Smooth feedback for cart, wishlist, and profile actions.

---

## 🛠️ Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS 3
- **Icons:** Lucide React
- **Fonts:** Playfair Display, Poppins, Noto Sans Devanagari

---

## 🏃 Running the Application

The dev server is currently running at:
```bash
http://localhost:3000/
```

To run manually or rebuild:
```bash
# Install dependencies
npm install

# Start Vite dev server
npm run dev

# Build production bundle
npm run build

# Preview production build
npm run preview
```
