import React from 'react';
import './Header.css';

function Header() {
    return(
        <header className='header'>
            <div className='header--logo'>LOGO</div>
            <h1 className='header--title'>Todo App</h1>
            <div className='header--search search'>
                <input type='text' className='search--input' placeholder='Search todos...'/>
                <button className='btn search--btn'>Search</button>
            </div>
        </header>
    )
}

export default Header;