import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import AdminPanel from "./AdminPanel";
import "../styles/App.css";

const initialProducts = [
  {
    id: 1,
    name: "Samsung Galaxy S8 64GB Black",
    price: 16303,
    description: "Galaxy S8 description",
    image: "https://i.imgur.com/8zQZ7Zz.jpg"
  },
  {
    id: 2,
    name: "Samsung Galaxy S9 64GB Black",
    price: 20888,
    description: "Galaxy S9 description",
    image: "https://i.imgur.com/8zQZ7Zz.jpg"
  },
  {
    id: 3,
    name: "Samsung Galaxy S8+ 64GB Black",
    price: 18701,
    description: "Galaxy S8+ description",
    image: "https://i.imgur.com/8zQZ7Zz.jpg"
  },
  {
    id: 4,
    name: "Xiaomi Redmi Note 8 Pro",
    price: 12000,
    description: "Redmi Note 8 Pro",
    image: "https://i.imgur.com/8zQZ7Zz.jpg"
  },
  {
    id: 5,
    name: "OnePlus 6T",
    price: 27000,
    description: "OnePlus 6T description",
    image: "https://i.imgur.com/8zQZ7Zz.jpg"
  },
  {
    id: 6,
    name: "Google Pixel 3",
    price: 45000,
    description: "Pixel 3 description",
    image: "https://i.imgur.com/8zQZ7Zz.jpg"
  },
  {
    id: 7,
    name: "Nokia 7 Plus",
    price: 15000,
    description: "Nokia 7 Plus description",
    image: "https://i.imgur.com/8zQZ7Zz.jpg"
  },
  {
    id: 8,
    name: "Motorola Moto G7",
    price: 13000,
    description: "Moto G7 description",
    image: "https://i.imgur.com/8zQZ7Zz.jpg"
  }
];

export default function App() {
  const [products, setProducts] = useState(initialProducts);

  return (
    <Router>
      {/* ✅ FIXED NAVBAR */}
      <nav className="navbar">
        <Link to="/">HOME</Link>
        <Link to="/admin">ADMIN</Link>
      </nav>

      <Switch>
        <Route exact path="/">
          <ProductList products={products} />
        </Route>

        <Route path="/products/:id">
          <ProductDetails products={products} />
        </Route>

        <Route path="/admin">
          <AdminPanel products={products} setProducts={setProducts} />
        </Route>
      </Switch>
    </Router>
  );
}
