import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context";
import { CartItem } from "../../components";
import './styles.css'
import { firebaseServices } from "../../services";

const { createOrder} = firebaseServices;

const Cart = () => {
    const { cart, total } = useContext(CartContext);
    const [orderResult, setOrderResult] = useState();
    const onHandlerOrder = async () => {
        const newOrder = {
            buyer: {
                name: 'Seba',
                email: 'sebahohl@gmail.com',
                phone: '093487598',
                shippingMethod: 'delivery',
                address: 'Uruguay, Montevideo',
            },
            createdAt: new Date(),
            id: 1,
            items: cart,
            payment: {
                currency: 'USD',
                method: 'cash',
                type: 'cash',
            },
            seller: {
                id: 1,
                name: 'Carlos',
                phone: '094857432',
                email: 'carlitos@gmail.com'
            },
            shipping: {
                deliveryDate: new Date() + 7,
                trackingNumber: '777488888',
                type: 'delivery',
            },
            total: total,
        }
        const result = await createOrder(newOrder);
        setOrderResult(result);
    }

    console.log('orderResult', orderResult);
    return (
        <div className="cart">
            <h1>Cart</h1>
            <div className="cart-content">
                {cart.length > 0 ? (
                    <>
                    {cart.map((item) => (
                        <CartItem key={item.id} {...item} />
                    ))}
                    <div className="button-container-order">
                        <button type="button" className="button-cart" onClick={onHandlerOrder}>
                            Order now
                        </button>
                    </div>
                    </> 
                ) : (
                <div>
                    <h2>Cart is empty</h2>
                    <div className="button-container">
                        <Link to="/" className="button-cart">Home</Link>
                    </div>
                </div>
            )}
            </div>
            
        </div>
    )
}

export default Cart;