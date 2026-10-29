import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // ── Helpers ──────────────────────────────────────────────
  const parsePrice = (cost) => parseFloat(cost.substring(1));

  const totalCartAmount = cartItems.reduce(
    (sum, item) => sum + parsePrice(item.cost) * item.quantity,
    0
  );

  // ── Handlers ─────────────────────────────────────────────
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity <= 1) {
      dispatch(removeItem(item.name));
    } else {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = (itemName) => {
    dispatch(removeItem(itemName));
  };

  const handleCheckout = () => {
    alert('Coming Soon');
  };

  // ── Render ───────────────────────────────────────────────
  return (
    <div className="cart-page">
      <div className="cart-container">
        <h2 className="cart-heading">🛒 Your Cart</h2>

        <div className="cart-total-banner">
          Total Cart Amount:{' '}
          <span className="cart-total-amount">${totalCartAmount.toFixed(2)}</span>
        </div>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <p className="cart-empty-text">
              🌱 Your cart is empty — go pick some plants!
            </p>
            <button className="continue-btn" onClick={onContinueShopping}>
              ← Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items-list">
              {cartItems.map((item) => {
                const unitPrice = parsePrice(item.cost);
                const subtotal = (unitPrice * item.quantity).toFixed(2);

                return (
                  <div className="cart-item-card" key={item.name}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />
                    <div className="cart-item-details">
                      <h3 className="cart-item-name">{item.name}</h3>
                      <p className="cart-item-unit-price">
                        Unit Price: <strong>{item.cost}</strong>
                      </p>
                      <div className="cart-item-qty-controls">
                        <button
                          className="qty-btn"
                          onClick={() => handleDecrement(item)}
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="qty-display">{item.quantity}</span>
                        <button
                          className="qty-btn"
                          onClick={() => handleIncrement(item)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <p className="cart-item-subtotal">
                        Total: <strong>${subtotal}</strong>
                      </p>
                    </div>
                    <button
                      className="delete-btn"
                      onClick={() => handleRemove(item.name)}
                      aria-label={`Remove ${item.name}`}
                    >
                      🗑 Delete
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="cart-actions">
              <button className="continue-btn" onClick={onContinueShopping}>
                ← Continue Shopping
              </button>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout →
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartItem;
