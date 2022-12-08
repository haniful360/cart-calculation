import React from 'react';
import './Products.css'
const Products = (props) => {
    const { name, price } = props.product;
    const { handleAddtoCart, handleRemovetoCart, product } = props;
    // console.log(product);
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap:'40px' }}>
                <h3>{name}</h3>
                <p>price:{price}</p>
                <div style={{width:'200px'}}>
                <button  onClick={() => handleAddtoCart(product)} className='btn'>+</button>
                <button onClick={() => handleRemovetoCart(product)} className='btn'>-</button>
                </div>
            </div>
        </div>
    );
};

export default Products;