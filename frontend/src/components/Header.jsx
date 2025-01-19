// import React from 'react';
import './Header.css'; // Import CSS for styling

const Header = () => {
    return (
        <nav className="navbar">
                <div className="navbar-container">
                    <div className="logo">FoodieHub</div>
                    <ul className="nav-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
    );
};

export default Header;
