import React from 'react';
import './Doctor.css'

const Doctor = (props) => {
    // console.log(props.doctor);
    const { name, id, age, type, consulting_fee, url } = props.doctor;
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={url} alt="" />
            </div>
            <div>
                <h4>Name: {name}</h4>
                <p>ID: {id}</p>
                <p>Age: {age}</p>
                <p>Type: {type}</p>
                <p>Consulting Fee: ${consulting_fee}</p>
                <button onClick={() => props.handleAddToCart(props.doctor)} className="btn-regular">Add to Cart</button>
            </div>
        </div>
    );
};

export default Doctor;