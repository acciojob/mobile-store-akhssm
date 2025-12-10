import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

export default function ProductDetails({ products, setProducts }) {
  const { id } = useParams();
  const history = useHistory();

  const product = products.find(p => p.id === Number(id));
  if (!product) return <h2>Product Not Found</h2>;

  function updateProduct() {
    alert("Product updated (dummy)");
  }

  function removeProduct() {
    setProducts(products.filter(p => p.id !== Number(id)));
    history.push("/admin");
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} style={{ width: 250 }} />

      <h2 style={{ color: '#1e90ff' }}>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>

      <button id="update-btn" onClick={updateProduct}>Update</button>
      <button id="remove-btn" onClick={removeProduct}>Remove</button>

      <br /><br />
      <button onClick={() => history.push('/')}>Back</button>
    </div>
  );
}
