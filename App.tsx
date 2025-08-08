import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { AnimatePresence } from "framer-motion";
import store from "./redux/store";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ProductCatalog from "./components/ProductCatalog";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Profile from "./components/Profile";
import AdminPanel from "./components/AdminPanel";
import DarkModeToggle from "./components/DarkModeToggle";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <DarkModeToggle />
        <Navbar />
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/products" element={<ProductCatalog />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </Router>
    </Provider>
  );
}