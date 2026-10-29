import React from 'react';
import './App.css';
import AboutUs from './AboutUs';
import ProductList from './ProductList';

function App() {
  const [showProductList, setShowProductList] = React.useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
  };

  const handleGoHome = () => {
    setShowProductList(false);
  };

  return (
    <div className="app">
      {!showProductList ? (
        <div className="landing-page">
          <div className="landing-overlay">
            <div className="landing-content">
              <h1 className="landing-title">Paradise Nursery</h1>
              <p className="landing-tagline">
                🌿 Where Green Dreams Come to Life 🌿
              </p>
              <p className="landing-subtitle">
                Bring nature indoors with our handpicked collection of beautiful,
                healthy houseplants — curated for every home and lifestyle.
              </p>
              <button className="get-started-btn" onClick={handleGetStarted}>
                Get Started
              </button>
              <AboutUs />
            </div>
          </div>
        </div>
      ) : (
        <ProductList onGoHome={handleGoHome} />
      )}
    </div>
  );
}

export default App;
