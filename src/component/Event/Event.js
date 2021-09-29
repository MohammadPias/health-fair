import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Doctor from '../Doctor/Doctor';
import './Event.css'

const Event = () => {
    const [doctors, setDoctors] = useState([]);
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    const handleAddToCart = (doctor) => {
        const newCart = [...carts, doctor];
        setCarts(newCart);
    }
    // console.log(carts);
    return (
        <div className="event-container">
            <div className="text-area">
                <h1>Organizing a Health Fair <span className="text-style">EVENT</span></h1>
                <h3>Total BudgetF: $1K</h3>
                <p>It’s that time of year again for planning your next health fair.  It is a preventative measure and a highly beneficial tool for many people. These fairs are often interactive, and certain people are in charge of different areas.</p>
            </div>
            <div className="body">
                <div className="sticky">
                    <Cart carts={carts}></Cart>
                </div>
                <div className="doctors-container">
                    {
                        doctors.map(doctor => <Doctor
                            handleAddToCart = {handleAddToCart}
                            key={doctor.id}
                            doctor={doctor}></Doctor>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Event;