import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart)
    let totalCost = 0;
    let addName = '';
    for (const drInfo of props.cart) {
        const { name, consulting_fee } = drInfo;
        totalCost = totalCost + consulting_fee;
        addName = addName + ' , ' + name;
    }
    return (
        <div className="cart-container">
            <h3>Total Doctor : {props.cart.length}</h3>
            <h3>Total Cost : $ {totalCost}</h3>
            <h4>Name: </h4>
            <li>{addName}</li>
        </div>
    );
};

export default Cart;