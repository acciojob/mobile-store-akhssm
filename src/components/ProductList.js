import React from 'react';
import { Link } from 'react-router-dom';


export default function ProductList({ products }) {
return (
<div className="container">
{products.map(item => (
<div className="product-card" key={item.id}>
<img src={item.image} alt={item.name} />
<Link to={`/products/${item.id}`}>{item.name}</Link>
<p>Price: {item.price}</p>
<button>Buy</button>
</div>
))}
</div>
);
}