import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
export default function Footer() {
    return (
        <div className='footer' id='Footer'>
            <div className='foot-content'>
                <div className="left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus reprehenderit dolores delectus ex debitis quaerat totam iste eaque consequatur impedit iusto sit, consequuntur numquam maiores fuga excepturi blanditiis dolorem.</p>
                    <div className="social-icon">
                        <img src={assets.facebook_icon} alt="" /><img src={assets.twitter_icon} alt="" /><img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privasy policy</li>
                    </ul>
                </div>
                <div className="right">
                    <h2>GET IN TOUGH</h2>
                    <ul>
                        <li>9344269448</li>
                        <li>kishoreg2302@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="copyright">Copyright @ Tomato.com -All Right Reserved.</p>
        </div>
    )
}
