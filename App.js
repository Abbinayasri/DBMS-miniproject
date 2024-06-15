import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PlantsPage from './pages/PlantsPage';
import SeedsPage from './pages/SeedsPage';
import PotsPage from './pages/PotsPage';
import CartPage from './pages/CartPage';
import lo from './pages/LoginPage';
import si from './pages/SignupPage';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';
import AccountDetails from './pages/AccountDetails';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  const [showRemovedMessage, setShowRemovedMessage] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setShowAddedMessage(true);
    setTimeout(() => {
      setShowAddedMessage(false);
    }, 5000); // Hide message after 5 seconds
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
    setShowRemovedMessage(true);
    setTimeout(() => {
      setShowRemovedMessage(false);
    }, 5000); // Hide message after 5 seconds
  };
  return (
    <Router>
      <div className="app">
        {showAddedMessage && <div className="message success">Added to cart successfully</div>}
        {showRemovedMessage && <div className="message success">Removed from cart successfully</div>}
        <Switch>
        <Route exact path="/" component={lo} />a
        <Route path="/sign" component={si} />a
          <Route path="/home" render={() => <HomePage addToCart={addToCart} />} />
          <Route path="/plants" render={() => <PlantsPage addToCart={addToCart} />} />
          <Route path="/seeds" render={() => <SeedsPage addToCart={addToCart} />} />
          <Route path="/pots" render={() => <PotsPage addToCart={addToCart} />} />
          <Route path="/cart" render={() => <CartPage cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/account" component={AccountDetails} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
