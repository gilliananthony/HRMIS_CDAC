import React from 'react';
import './LandingPage.css'; // Import the CSS file for styling
import logo from './imgs/cdac_logo.png'; // Import your logo image
import bg_image from './imgs/hrmis1.jpg'; // Import your logo image

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="navbar_lp">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="logo_lp" />
                    <h1>HRMIS</h1>
                </div>
                <ul className="nav-links">
                    <li className='param'>About</li>
                    <li className='param'>Contact</li>
                    <li className='param'>Contact</li>
                    <li className='param'>Help</li>
                    <li className='param'>Updates</li>
                </ul>
            </div>
            <div className='bodyscreen'>
                <div className='img_content'>
                    <div className='title_lp'><h1>HRMIS-Performance Management </h1></div>

                    <div className='image'>
                        <img src={bg_image} className='bg_image' />
                    </div>

                </div>

                <div className="content">

                    <div className="login-buttons">
                        <div className="login-card hr">
                            <h2>HR Login</h2>
                            <button>Login</button>
                        </div>
                        <div className="login-card employee">
                            <h2>Employee Login</h2>
                            <button>Login</button>
                        </div>
                        <div className="login-card reporting-officer">
                            <h2>Reporting Officer Login</h2>
                            <button>Login</button>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} HRMIS. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;