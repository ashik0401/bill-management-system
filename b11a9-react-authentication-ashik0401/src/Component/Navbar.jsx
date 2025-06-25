import React, { useState, useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router';
import userImage from '../assets/user.png';
import { AuthContext } from '../Provider/AuthContext';
import Loading from './Loading';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { user, logOut, loading } = useContext(AuthContext);
    const [balance, setBalance] = useState(() => {
        const stored = localStorage.getItem('balance');
        return stored ? parseFloat(stored).toFixed(2) : '10000.00';
    });

    useEffect(() => {
        const stored = localStorage.getItem('balance');
        if (!stored) {
            localStorage.setItem('balance', '10000.00');
        }
        const updateBalance = () => {
            const latest = localStorage.getItem('balance');
            setBalance(latest ? parseFloat(latest).toFixed(2) : '0.00');
        };
        window.addEventListener('balanceChange', updateBalance);
        return () => window.removeEventListener('balanceChange', updateBalance);
    }, []);

    if (loading) {
        return <Loading />;
    }

    const handleLinkClick = () => {
        setIsDropdownOpen(false);
    };

    const handleLogOut = () => {
        logOut()
            .then(() => {
                loading(true);
            })
            .catch((error) => {
                console.error("Error logging out: ", error);
            });
    };

    const links = (
        <>
            <li><NavLink className={({ isActive }) => `m-2 ${isActive ? 'bg-sky-400' : ''} font-bold`} to="/" onClick={handleLinkClick}>Home</NavLink></li>
            <li><NavLink className={({ isActive }) => `m-2 ${isActive ? 'bg-sky-400' : ''} font-bold`} to="/bills" onClick={handleLinkClick}>Bills</NavLink></li>
            <li><NavLink className={({ isActive }) => `m-2 ${isActive ? 'bg-sky-400' : ''} font-bold`} to="/profile" onClick={handleLinkClick}>Profile</NavLink></li>
        </>
    );

    return (
        <div className="navbar md:px-10 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className=' cursor-pointer lg:hidden border-none ' onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className={`menu menu-sm dropdown-content bg-sky-200 z-10 mt-3 p-2 shadow rounded-box font-bold  transition-colors duration-200 ${isDropdownOpen ? 'bg-sky-400' : 'bg-base-400'}`}>
                        {links}
                    </ul>
                </div>
                <a className="text-xl md:text-4xl font-bold pl-2">Pay Bills</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                {user ? (
                    <div className="dropdown dropdown-end">
                        <div 
                        tabIndex={0} 
                        role="button" 
                        className="cursor-pointer border-none" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                            <img
                                className="w-10 h-10 object-cover rounded-full"
                                src={user.photoURL || userImage}
                                alt="User"
                            />
                        </div>
                        <ul tabIndex={0} className={`menu menu-sm min-w-30 bg-sky-100 dropdown-content  z-10 mt-3 p-2 shadow rounded-box font-bold transition-colors duration-200 ${isDropdownOpen ? 'bg-sky-400' : 'bg-base-400'}`}>
                            <li>
                                <h2 className="text-base font-semibold">{user.displayName || 'No Name'}</h2>
                                <p className="text-sm">{user.email}</p>
                            </li>
                            <li className="text-sm font-normal">Balance: {balance}</li>
                            <button 
                            onClick={handleLogOut} 
                            className="btn border-none bg-sky-200 text-red-600 font-semibold hover:bg-sky-400 cursor-pointer">Log Out</button>
                        </ul>
                    </div>
                ) : (
                    <div className="space-x-2">
                        <Link to="/auth/login" className="hover:bg-sky-400 hover:text-black px-3 py-2 rounded-md border-none text-lg font-semibold bg-transparent ">
                            Login
                        </Link>
                        <Link to="/auth/register" className="hover:bg-sky-400 hover:text-black px-3 py-2 rounded-md border-none text-lg font-semibold bg-transparent ">
                            Register
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
