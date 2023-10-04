import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">

                {/*left side */}
                <div className="flexColStart f-left">
                    <img src="./logo2.png" alt="" width={120} />

                    <span className="secondaryText">
                        Our vision is to let all of you to <br /> deicde the best place to live.
                    </span>
                </div>

                <div className="flexColStart f-right">
                    <span className='primaryText'>Information</span>
                    <span className='secondaryText'>New york, FL 4567, USA</span>
                    <div className="flexCenter f-menu">
                        <span>Properties</span>
                        <span>Services</span>
                        <span>Products</span>
                        <span>About Us</span>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Footer