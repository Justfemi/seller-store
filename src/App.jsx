import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Store from './pages/store/store';
import Checkout from './pages/checkout/checkout';
import Cart from './pages/cart/cart';
// import ProductDetails from './pages/productDetails/productDetails';

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  const handleIncrementQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrementQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };
  
  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Store handleAddToCart={handleAddToCart} cart={cart} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart cart={cart} 
            handleRemoveFromCart={handleRemoveFromCart}
            handleIncrementQuantity={handleIncrementQuantity}
            handleDecrementQuantity={handleDecrementQuantity}
            getTotalAmount={getTotalAmount}
          />}
        />
        {/* <Route path="/:id" element={<ProductDetails />} /> */}
      </Routes>
    </Router>
  )
}

export default App
