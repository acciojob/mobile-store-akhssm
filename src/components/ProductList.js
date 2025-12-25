import React from "react";
import { Link } from "react-router-dom";

export default function ProductList({ products }) {
  return (
    <div className="container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          
          <img src={product.image} alt={product.name} />

          <div>
            <Link to={`/products/${product.id}`}>
              {product.name}
            </Link>
            <p>Price: {product.price}</p>
          </div>

          <button className="btn">Buy</button>

        </div>
      ))}
    </div>
  );
}
