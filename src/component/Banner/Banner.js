import React from 'react';
import banner from '../../images/banner.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='top-container'>
            <div className="left-container">
                <div>
                    <h1>Being Healthy <br /> & Fit Isn't a Fad or <br /> a Trend, It's a Lifestyle.</h1>
                    <button className="btn-regular">Learn More</button>
                </div>
            </div>
            <div className="right-container">
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;