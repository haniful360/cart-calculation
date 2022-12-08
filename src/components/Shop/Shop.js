import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const [cart, setCart] = useState([]);
    const [totalPrice, settotalPrice] = useState(0);
    const [grandTotalPrice, setgrandTotalPrice] = useState(0);
    const [couponText, setcouponText] = useState('');
    const [isRender, setIsRender] = useState(false);
    // useEffect(() => {
    //     setCart([
    //         ...cart.filter(item => item.qty > 0)
    //     ])
    // }, [cart])

    useEffect(() => {
        cart.map((item) => {
            settotalPrice((totalPrice + item.price));
            setgrandTotalPrice((totalPrice + item.price))
        });
    }, [cart]);
    const products = [
        { id: 1, name: 'laptop', price: 45 },
        { id: 2, name: 'mobile', price: 256 },
        { id: 3, name: 'keyboard', price: 50 },
        { id: 4, name: 'mouse', price: 78 },
        { id: 5, name: 'headphone', price: 55 },
    ]
    const coupnList = {
        "modhu": .1,
        "full": .05,
    }
    const applyCoupon = () => {
        const isCouponExist = Object.keys(coupnList).includes(couponText);
        // console.log(isCouponExist);
        setcouponText('')

        if (isCouponExist) {
            setgrandTotalPrice(totalPrice - Math.ceil(totalPrice * .1));

        }
        else {
            alert('plase valid promo code')
        }
    }
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
                                qty: item.qty + 1,
                                price: item.price
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
                    qty: 1,
                    price: product.price
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
                                qty: item.qty - 1,
                                price: item.price
                            }
                        )
                    }
                    return (item)
                })
            ])
        }
    }

    setTimeout(() => {
        setIsRender(true)
    }, 2000);

    // if (!isRender) {
    //     <h1>loading....</h1>
    // }

    return (
        <div>
            {isRender &&  <div className='shop-container'>

                <div className="product-container">
                    <h2>Porduct list</h2>

                    {
                        products.map(product => <Products
                            key={product.id}
                            product={product}
                            handleAddtoCart={handleAddtoCart}
                            handleRemovetoCart={handleRemovetoCart}
                        ></Products>)
                    }
                </div>
                <div className="cart-container">
                    <h2>cart</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: "40px" }}>
                        <p>Product name</p>
                        <p>quantity</p>
                        <p>Total price</p>
                    </div>
                    {/* <Cart cart={cart}></Cart> */}
                    {
                        cart.map(item => <Cart item={item}></Cart>)
                    }
                    <h3>total price:{totalPrice}</h3>
                    <div>
                        <input onChange={(e) => setcouponText(e.target.value)} type="text" name="" id="" value={couponText} />
                        <button onClick={() => applyCoupon()}>apply</button>
                        <h4>disCount:{totalPrice - grandTotalPrice}</h4>
                    </div>
                    <h3>GrandTotal:{grandTotalPrice}</h3>
                </div>
            </div>}

        </div>
    );
};

export default Shop;