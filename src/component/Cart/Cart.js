import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart)
    let totalCost = 0;
    for (const drInfo of props.cart) {
        const { consulting_fee } = drInfo;
        totalCost = totalCost + consulting_fee;
    }
    return (
        <div className="cart-container">
            <h3>Total Doctor : {props.cart.length}</h3>
            <h3>Total Cost : $ {totalCost}</h3>
        </div>
    );
};

export default Cart;