import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AdminPanel({ products, setProducts }) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
    price: ""
  });

  const addProduct = () => {
    setProducts([
      ...products,
      { ...form, id: Date.now(), price: Number(form.price) }
    ]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="admin-page">

      <div className="admin-form">
        <input className="form-control" placeholder="Name"
          onChange={e => setForm({ ...form, name: e.target.value })} />

        <input className="form-control" placeholder="Description"
          onChange={e => setForm({ ...form, description: e.target.value })} />

        <input className="form-control" placeholder="Image URL"
          onChange={e => setForm({ ...form, image: e.target.value })} />

        <input className="form-control" placeholder="Price"
          onChange={e => setForm({ ...form, price: e.target.value })} />

        <button onClick={addProduct}>Add</button>
      </div>

      {products.map(product => (
        <div className="admin-card" key={product.id}>
          <img src={product.image} alt={product.name} />

          <Link to={`/products/${product.id}`}>
            {product.name}
          </Link>

          <button
            className="float-right"
            onClick={() => deleteProduct(product.id)}
          >
            Delete
          </button>

          <button className="float-right">
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}
