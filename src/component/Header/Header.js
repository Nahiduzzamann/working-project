import React from 'react';
import './Header.css';
import logo from '../../asset/images/Logo.svg'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="logo" />
            <div>
                <Link to={"/"}>Shop</Link>
                <Link to={"/orders"}>Order Review</Link>
                <Link to={"/inventory"}>Manage Inventory</Link>
                <Link to={"/login"}>Login</Link>       
                <Link to={"/signup"}>Signup</Link>       
            </div>
        </nav>
    );
};

export default Header;