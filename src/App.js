import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Login from "./components/Login";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
