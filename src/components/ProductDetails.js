import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';


export default function ProductDetails({ products }) {
const { id } = useParams();
const navigate = useNavigate();


const product = products.find(p => p.id === Number(id));


if (!product) return <h2>Product Not Found</h2>;


return (
<div className="product-details">
<img src={product.image} alt={product.name} />
<h2>{product.name}</h2>
<p>{product.description}</p>
<p>Price: {product.price}</p>
<button className="btn" onClick={() => navigate('/')}>Back</button>
</div>
);
}