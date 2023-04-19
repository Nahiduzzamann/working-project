import React, { useContext } from 'react';
import './Header.css';
import logo from '../../asset/images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';


const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        console.log(user.email);
        logOut()
            .then(result => { })
            .catch(er => {
                console.error(er)
            })
    }
    return (
        <nav className='header'>
            <img src={logo} alt="logo" />
            <div style={{ display: 'flex', }}>
                <Link to={"/"}>Shop</Link>
                <Link to={"/orders"}>Order Review</Link>
                <Link to={"/inventory"}>Manage Inventory</Link>
                {user? <div></div>:<div> <Link to={"/login"}>Login</Link>
                    <Link to={"/signup"}>Sign Up</Link> </div>}
                {
                    user &&
                    <div style={{ display: 'flex', marginLeft: 30 }}>
                        <span className='text-white'>Welcome {user.email}</span>
                        <button style={{ marginLeft: 30 }} onClick={handleLogOut}>Sign Out</button>
                    </div>
                }
            </div>
        </nav>
    );
};

export default Header;