import React from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductDetails({ products }) {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) return null;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>

      <Link to="/" className="btn">Back</Link>
    </div>
  );
}
