import React from 'react';
import './Cart.css';

const Cart = ({ item }) => {


    return (
        <div>

            <div style={{ display: "flex", justifyContent: 'center', gap: '50px' }}>
                <p>{item.name}</p>
                <p>{item.qty}</p>
                <p>{item.qty * item.price}</p>
            </div>
            {/* {
                cart.map(c => <div>
                    <span>{c.name} </span> : <span></span>

                </div> )
            } */}
        </div>
    );
};

export default Cart;