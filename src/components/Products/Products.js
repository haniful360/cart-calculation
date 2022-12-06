import React from 'react';
import './Products.css'
const Products = (props) => {
    const {name} = props.product;
    const {handleAddtoCart, handleRemovetoCart,product} = props;
    // console.log(product);
    return (
        <div>
            <div>
                <h3>{name}</h3>
                <button onClick={() => handleAddtoCart(product)} className='btn'>+</button>
                <button onClick={() => handleRemovetoCart(product)} className='btn'>-</button>
            </div>
        </div>
    );
};

export default Products;