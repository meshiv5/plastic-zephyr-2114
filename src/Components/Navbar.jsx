import React from 'react'
import '../Styles/Navbar/Navbar.css'

export default function Navbar() {
    return (
        <div id='navbar'>
            <div id='topNav'>
                <h5>OUR BRAND PROMISE</h5>
                <h5>EASY RETURN</h5>
                <hr className='topNavDivider' />
                <h5>NEXT DAY DELIVERY</h5>
                <hr className='topNavDivider' />
                <h5>SERVICE GUARANTEE</h5>
                <hr className='topNavDivider' />
                <h5>UNMATCHED NETWORK</h5>
                <hr className='topNavDivider' />
                <h5>Find a store</h5>
                <hr className='topNavDivider' />
                <h5>Contact us</h5>
            </div>
            <hr className='topNavDivider' />

            <div id='midNav'>
                <img height='50px' src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" alt="RelianceLogo" />
                <div>
                    <input type="text" placeholder='Find your favorite products' />
                    <img width='20px' src="https://cdn-icons-png.flaticon.com/512/107/107122.png" alt="searchIcon" />
                </div>
                <div>
                    <h5>Select your PIN Code</h5>
                    <hr className='topNavDivider' />
                    <img id='cart' width='20px' src="https://cdn-icons-png.flaticon.com/512/649/649931.png" alt="cartIcon" />
                    <h5>Cart</h5>
                    <hr className='topNavDivider' />
                    <img width='20px' src="https://cdn-icons-png.flaticon.com/512/2321/2321232.png" alt="loginIcon" />
                    <h5>Login</h5>
                </div>
            </div>

            <div id='botNav'>

                <div className='parent'>
                    <h6>MOBILES & TABLETS</h6>
                    <div className='child'>
                        <p>Smartphones</p>
                        <br />
                        <p>Wearable Technology</p>
                        <p>Boat New Launch</p>
                        <br />
                        <p>Accessories</p>
                        <p>Tablet Accessories</p>
                        <p>Mobile Grips & Stands</p>
                        <p>Car Mobile Holders</p>
                        <p>Memory Cards</p>
                    </div>
                </div>
                <div className='parent'>
                    <h6>TELEVISIONS</h6>
                    <div className='child'>
                        <p>dummy</p>
                        <p>dummy</p>
                        <p>dummy</p>
                    </div>
                </div>
                <div className='parent'>
                    <h6>AUDIO</h6>
                    <div className='child'>
                        <p>dummy</p>
                        <p>dummy</p>
                        <p>dummy</p>
                    </div>
                </div>
                <div className='parent'>
                    <h6>HOME APPLIANCES</h6>
                    <div className='child'>
                        <p>dummy</p>
                        <p>dummy</p>
                        <p>dummy</p>
                    </div>
                </div>
                <div className='parent'>
                    <h6>COMPUTERS</h6>
                    <div className='child'>
                        <p>dummy</p>
                        <p>dummy</p>
                        <p>dummy</p>
                    </div>
                </div>
                <div className='parent'>
                    <h6>CAMERAS</h6>
                    <div className='child'>
                        <p>dummy</p>
                        <p>dummy</p>
                        <p>dummy</p>
                    </div>
                </div>
                <div className='parent'>
                    <h6>KITCHEN APPLIANCES</h6>
                    <div className='child'>
                        <p>dummy</p>
                        <p>dummy</p>
                        <p>dummy</p>
                    </div>
                </div>
                <div className='parent'>
                    <h6>PERSONAL CARE</h6>
                    <div className='child'>
                        <p>dummy</p>
                        <p>dummy</p>
                        <p>dummy</p>
                    </div>
                </div>
                <div className='parent'>
                    <h6>ACCESSORIES</h6>
                    <div className='child'>
                        <p>dummy</p>
                        <p>dummy</p>
                        <p>dummy</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
