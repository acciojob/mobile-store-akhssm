import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AdminPanel({ products, setProducts }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    image: ""
  });

  function addProduct() {
    if (!form.name || !form.price || !form.image) return;

    const newProduct = {
      id: Date.now(),
      name: form.name,
      description: form.description,
      image: form.image,
      price: Number(form.price)
    };

    setProducts([...products, newProduct]);
    setForm({ name: "", price: "", description: "", image: "" });
  }

  function updatePrice(id, newPrice) {
    setProducts(products.map(p =>
      p.id === id ? { ...p, price: Number(newPrice) } : p
    ));
  }

  function deleteProduct(id) {
    setProducts(products.filter(p => p.id !== id));
  }

  return (
    <div className="admin-page">
      <h2>Admin Panel</h2>

      <div className="admin-form">
        <input className="form-control" placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <input className="form-control" placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
        <input className="form-control" placeholder="Image URL" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} />
        <input className="form-control" placeholder="Price" type="number" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} />
        <button onClick={addProduct}>Add</button>
      </div>

      <ul>
        {products.map(item => (
          <li key={item.id} style={{ marginBottom: 12 }}>

            <Link to={`/products/${item.id}`}>{item.name}</Link>

            <input
              className="form-control"
              type="number"
              defaultValue={item.price}
              onBlur={e => updatePrice(item.id, e.target.value)}
            />

            <button className="float-right" onClick={() => deleteProduct(item.id)}>
              Delete
            </button>

          </li>
        ))}
      </ul>
    </div>
  );
}
