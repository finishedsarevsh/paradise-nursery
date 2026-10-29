# Paradise Nursery 🌿

An online houseplant shop built with React and Redux Toolkit — your one-stop destination for beautiful, healthy houseplants that transform any space.

---

## About

Paradise Nursery is a modern e-commerce web application for purchasing houseplants online. Browse curated plant collections, add favourites to your cart, and enjoy a seamless shopping experience — all from the comfort of your home.

---

## Features

- 🌱 **3+ Plant Categories** — Air Purifying, Aromatic, and Succulent/Low-Maintenance plants
- 🛒 **Redux-Powered Cart** — Add, remove, and adjust quantities with live badge counts
- 🔢 **Live Cart Totals** — Per-item and grand-total price calculations update in real time
- 🚫 **Prevent Duplicate Adds** — "Add to Cart" button disables after first click
- 📱 **Responsive Grid Layout** — CSS Grid auto-fill for any screen size
- 🏠 **Multi-Page Flow** — Landing → Product List → Cart with a sticky navbar
- ✅ **Clean UX** — Hover effects, empty-cart messages, and quantity ± controls

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 (Vite) | UI framework & build tooling |
| Redux Toolkit | Global cart state management |
| react-redux | React bindings for Redux |
| Plain CSS | Styling (no UI frameworks) |
| JavaScript / JSX | Language |

---

## Installation & Running

```bash
# 1. Clone the repository
git clone <your-github-url>
cd paradise-nursery

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

```
paradise-nursery/
├── README.md
├── index.html
├── package.json
└── src/
    ├── main.jsx          # Entry — wraps <App/> in Redux <Provider>
    ├── store.js          # Redux store with cart reducer
    ├── App.jsx           # Root component — landing page & routing state
    ├── App.css           # Landing page styles, background, layout
    ├── AboutUs.jsx       # Company description component
    ├── ProductList.jsx   # Plant catalogue with navbar and cart badge
    ├── ProductList.css   # Product grid and card styles
    ├── CartItem.jsx      # Cart page with quantity controls and totals
    ├── CartItem.css      # Cart page styles
    └── CartSlice.jsx     # Redux slice: addItem, removeItem, updateQuantity
```
