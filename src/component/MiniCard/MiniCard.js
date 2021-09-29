import React from 'react';
import './MiniCard.css'

const MiniCard = (props) => {
    console.log(props.cart);
    const {name, type, url} =props.cart;
    return (
        <div className="mCard-container">
            <div className="mCard-image">
                <img src={url} alt="" />
            </div>
            <div className="mcard-right">
                <h5>{name}</h5>
                <p>{type}</p>
            </div>
        </div>
    );
};

export default MiniCard;