import React, { useState } from "react";

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
        <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Description" onChange={e => setForm({ ...form, description: e.target.value })} />
        <input placeholder="Image URL" onChange={e => setForm({ ...form, image: e.target.value })} />
        <input placeholder="Price" onChange={e => setForm({ ...form, price: e.target.value })} />

        <button className="add-btn" onClick={addProduct}>
          Add
        </button>
      </div>

      {products.map((product) => (
        <div className="admin-card" key={product.id}>
          <div>{product.name}</div>

          <button
            className="delete-btn"
            onClick={() => deleteProduct(product.id)}
          >
            Delete
          </button>

          <button className="edit-btn">
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}
