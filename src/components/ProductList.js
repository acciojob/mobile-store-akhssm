import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductList({ products }) {
  return (
    <div className="container">
      {products.map(item => (
        <div className="col-12" key={item.id} style={{ marginBottom: 12 }}>

          <Link to={`/products/${item.id}`}>
            <div className="row" style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              background: '#fff',
              padding: 12,
              borderBottom: '1px solid #ccc'
            }}>
              <div style={{ width: 90 }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '100%', maxWidth: 90 }}
                />
              </div>

              <div>
                <div style={{ color: '#1e90ff', fontWeight: 600 }}>{item.name}</div>
                <div style={{ marginTop: 6 }}>Price: {item.price}</div>
              </div>
            </div>
          </Link>

        </div>
      ))}
    </div>
  );
}
