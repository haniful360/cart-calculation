import React from 'react';
import './Cart.css';

const Cart = ({item}) => {

    
    return (
        <div>
            
            <span>{item.name}</span> : <span>{item.qty}</span>
            {/* {
                cart.map(c => <div>
                    <span>{c.name} </span> : <span></span>

                </div> )
            } */}
        </div>
    );
};

export default Cart;