import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import AdminPanel from "./AdminPanel";
import "../styles/App.css";

const initialProducts = [
  { id: 1, name: "Samsung Galaxy S8 64GB Black", price: 16303, description: "Galaxy S8 description", image: "https://i.imgur.com/8zQZ7Zz.jpg" },
  { id: 2, name: "Samsung Galaxy S9 64GB Black", price: 20888, description: "Galaxy S9 description", image: "https://i.imgur.com/HKJp6kE.jpg" },
  { id: 3, name: "Samsung Galaxy S8+ 64GB Black", price: 18701, description: "Galaxy S8+ description", image: "https://i.imgur.com/a9ZgQyK.jpg" },
];

export default function App() {
  const [products, setProducts] = useState(initialProducts);

  return (
    <Router>
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


