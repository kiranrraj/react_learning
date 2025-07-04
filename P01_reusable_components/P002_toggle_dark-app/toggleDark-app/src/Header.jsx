
import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <a href="/">Kiranraj R.</a>
                </div>
                <nav className="nav-links">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;