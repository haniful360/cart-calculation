import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [cart, setCart] = useState([]);
    const products = [
        { id: 1, name: 'laptop' },
        { id: 2, name: 'mobile' },
        { id: 3, name: 'keyboard' },
        { id: 4, name: 'mouse' },
        { id: 5, name: 'headphone' },
    ]
    const handleAddtoCart = (product) => {
        const isExist = cart.map(item => item.id).includes(product.id);

        if (isExist) {
            setCart([
                ...cart.map(item => {
                    if (item.id === product.id) {
                        return (
                            {
                                id: item.id,
                                name: item.name,
                                qty: item.qty + 1
                            }
                        )
                    }
                    return (item)
                })
            ])
        }
        else {
            setCart([
                ...cart,
                {
                    id: product.id,
                    name: product.name,
                    qty: 1
                }
            ])
        }
    }
    const handleRemovetoCart = (product) => {
        const isExist = cart.map(item => item.id).includes(product.id);

        if (isExist) {
            setCart([
                ...cart.map(item => {
                    if (item.id === product.id) {
                        return (
                            {
                                id: item.id,
                                name: item.name,
                                qty: item.qty - 1
                            }
                        )
                    }
                    return (item)
                })
            ])
        }
        else {
            setCart([
                ...cart,
                {
                    id: product.id,
                    name: product.name,
                    qty: 1
                }
            ])
        }
    }
    return (
        <div className='shop-container'>

            <div className="product-container">
                <h2>Porduct list</h2>

                {
                    products.map(product => <Products

                        product={product}
                        handleAddtoCart={handleAddtoCart}
                        handleRemovetoCart= {handleRemovetoCart}
                    ></Products>)
                }
            </div>
            <div className="cart-container">
                <h2>cart</h2>
                <span>Product name:</span> <span>quantity</span>
                {/* <Cart cart={cart}></Cart> */}
                {
                    cart.map(item => <Cart item={item}></Cart>)
                }
            </div>
        </div>
    );
};

export default Shop;