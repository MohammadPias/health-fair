import React from 'react';
import MiniCard from '../MiniCard/MiniCard';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.carts)
    let totalCost = 0;
    for (const drInfo of props.carts) {
        const { consulting_fee } = drInfo;
        totalCost = totalCost + consulting_fee;
    }

    return (
        <div className="cart">
            <div className="cart-container">
                <h3>Total Doctor : {props.carts.length}</h3>
                <h3>Total Cost: ${totalCost}</h3>
            </div>
            <div className="mCard">
                {
                    props.carts.map(cart => <MiniCard
                        key={cart.id}
                        cart={cart}></MiniCard>)
                }
            </div>
        </div>
    );
};

export default Cart;