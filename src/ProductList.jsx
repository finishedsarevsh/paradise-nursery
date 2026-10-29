import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

// ─────────────────────────────────────────────
//  Plant catalogue — 3 categories, 6+ plants each
// ─────────────────────────────────────────────
const plantsArray = [
  // ── Category 1: Air Purifying Plants ────────
  {
    category: 'Air Purifying Plants',
    plants: [
      {
        name: 'Peace Lily',
        image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e4c5a?auto=format&fit=crop&w=400&q=70',
        description: 'Elegant white blooms that filter benzene, formaldehyde and ammonia from indoor air.',
        cost: '$14',
      },
      {
        name: 'Snake Plant',
        image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?auto=format&fit=crop&w=400&q=70',
        description: 'Nearly indestructible; converts CO₂ to oxygen at night — perfect bedroom plant.',
        cost: '$12',
      },
      {
        name: 'Spider Plant',
        image: 'https://images.unsplash.com/photo-1603436326446-74b9e86f5a6c?auto=format&fit=crop&w=400&q=70',
        description: 'Fast-growing trailing plant that removes formaldehyde and xylene from the air.',
        cost: '$10',
      },
      {
        name: 'Bamboo Palm',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=70',
        description: 'A top-ranked NASA air-purifying palm that also adds a tropical vibe to any room.',
        cost: '$28',
      },
      {
        name: 'Rubber Plant',
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=400&q=70',
        description: 'Bold, waxy leaves that absorb and neutralise airborne toxins with style.',
        cost: '$18',
      },
      {
        name: 'Dracaena',
        image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8c76ea4?auto=format&fit=crop&w=400&q=70',
        description: 'Striking striped foliage that tackles trichloroethylene and benzene efficiently.',
        cost: '$16',
      },
      {
        name: 'Aloe Vera',
        image: 'https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?auto=format&fit=crop&w=400&q=70',
        description: 'Purifies formaldehyde and benzene while keeping soothing gel handy for burns.',
        cost: '$9',
      },
    ],
  },

  // ── Category 2: Aromatic Plants ─────────────
  {
    category: 'Aromatic Plants',
    plants: [
      {
        name: 'Lavender',
        image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?auto=format&fit=crop&w=400&q=70',
        description: 'Calming purple flowers release a soothing scent that promotes restful sleep.',
        cost: '$11',
      },
      {
        name: 'Jasmine',
        image: 'https://images.unsplash.com/photo-1599598425947-5202edd56fdf?auto=format&fit=crop&w=400&q=70',
        description: 'Sweetly fragrant star-shaped blooms; studies link jasmine scent to reduced anxiety.',
        cost: '$13',
      },
      {
        name: 'Mint',
        image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=400&q=70',
        description: 'Refreshing and energising aroma; grow on a sunny windowsill for tea and cooking.',
        cost: '$7',
      },
      {
        name: 'Rosemary',
        image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=400&q=70',
        description: 'Piney, invigorating fragrance shown to boost memory and concentration.',
        cost: '$8',
      },
      {
        name: 'Gardenia',
        image: 'https://images.unsplash.com/photo-1587552604226-b98e5d02cc8c?auto=format&fit=crop&w=400&q=70',
        description: 'Intensely fragrant creamy blooms; a luxurious statement plant for bright rooms.',
        cost: '$19',
      },
      {
        name: 'Eucalyptus',
        image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=400&q=70',
        description: 'Cool, refreshing menthol scent that clears the mind and repels insects naturally.',
        cost: '$15',
      },
      {
        name: 'Lemon Balm',
        image: 'https://images.unsplash.com/photo-1567360425862-2cf6c2506a8b?auto=format&fit=crop&w=400&q=70',
        description: 'Citrusy herbal aroma known to ease stress and brighten your mood effortlessly.',
        cost: '$9',
      },
    ],
  },

  // ── Category 3: Succulents & Low-Maintenance ─
  {
    category: 'Succulents & Low-Maintenance Plants',
    plants: [
      {
        name: 'Echeveria',
        image: 'https://images.unsplash.com/photo-1508022713622-df2d8fb7b4cd?auto=format&fit=crop&w=400&q=70',
        description: 'Stunning rosette-shaped succulent in jewel tones; thrives on neglect.',
        cost: '$6',
      },
      {
        name: 'Haworthia',
        image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=400&q=70',
        description: 'Compact, architectural succulent perfect for desk and shelf displays indoors.',
        cost: '$8',
      },
      {
        name: 'ZZ Plant',
        image: 'https://images.unsplash.com/photo-1616411796880-c93ca7f7d7c7?auto=format&fit=crop&w=400&q=70',
        description: 'Glossy, dark-green leaves that tolerate low light and irregular watering like a champ.',
        cost: '$20',
      },
      {
        name: 'Pothos',
        image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=400&q=70',
        description: 'Fast-trailing vine in vibrant green and yellow; impossible to kill, easy to propagate.',
        cost: '$7',
      },
      {
        name: 'Jade Plant',
        image: 'https://images.unsplash.com/photo-1631125915902-d8abe9225ff2?auto=format&fit=crop&w=400&q=70',
        description: 'A living good-luck charm with thick oval leaves; can live for decades with minimal care.',
        cost: '$11',
      },
      {
        name: 'Cactus (Barrel)',
        image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=400&q=70',
        description: 'Sculptural desert icon that stores water and thrives in bright light with rare watering.',
        cost: '$13',
      },
      {
        name: 'String of Pearls',
        image: 'https://images.unsplash.com/photo-1510505751526-76254de51bb2?auto=format&fit=crop&w=400&q=70',
        description: 'Whimsical cascading strands of bead-like leaves; a show-stopper in hanging planters.',
        cost: '$14',
      },
    ],
  },
];

function ProductList({ onGoHome }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Track which plant names have been added (derive from Redux store)
  const addedItemNames = new Set(cartItems.map((i) => i.name));

  // Toggle between product grid and cart page
  const [showCart, setShowCart] = useState(false);

  // Total item count for badge
  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const handleCartClick = () => {
    setShowCart(true);
  };

  const handlePlantsClick = () => {
    setShowCart(false);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
  };

  return (
    <div className="product-list-wrapper">
      {/* ── Sticky Navbar ── */}
      <nav className="navbar">
        <div className="navbar-brand">🌿 Paradise Nursery</div>
        <div className="navbar-links">
          <button className="nav-btn" onClick={onGoHome}>
            🏠 Home
          </button>
          <button className="nav-btn" onClick={handlePlantsClick}>
            🌱 Plants
          </button>
          <button className="nav-btn cart-nav-btn" onClick={handleCartClick}>
            <span className="cart-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-label="Cart"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </span>
            Cart
            {totalCartItems > 0 && (
              <span className="cart-badge">{totalCartItems}</span>
            )}
          </button>
        </div>
      </nav>

      {/* ── Main Content ── */}
      {showCart ? (
        <CartItem onContinueShopping={handleContinueShopping} />
      ) : (
        <main className="product-main">
          <h1 className="product-page-title">Our Plant Collection</h1>
          <p className="product-page-sub">
            Handpicked plants for every space and lifestyle — find your perfect green companion.
          </p>

          {plantsArray.map((categoryGroup) => (
            <section key={categoryGroup.category} className="category-section">
              <h2 className="category-heading">{categoryGroup.category}</h2>
              <div className="plant-grid">
                {categoryGroup.plants.map((plant) => {
                  const isAdded = addedItemNames.has(plant.name);
                  return (
                    <div className="plant-card" key={plant.name}>
                      <img
                        src={plant.image}
                        alt={plant.name}
                        className="plant-thumbnail"
                        loading="lazy"
                      />
                      <div className="plant-info">
                        <h3 className="plant-name">{plant.name}</h3>
                        <p className="plant-cost">{plant.cost}</p>
                        <p className="plant-description">{plant.description}</p>
                        <button
                          className={`add-to-cart-btn${isAdded ? ' added' : ''}`}
                          onClick={() => handleAddToCart(plant)}
                          disabled={isAdded}
                        >
                          {isAdded ? '✔ Added to Cart' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </main>
      )}
    </div>
  );
}

export default ProductList;
