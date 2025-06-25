import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Navbar';

const AuthLayouts = () => {
    return (
        <div className='min-h-screen bg-sky-100'>
            <Navbar></Navbar>
            <div className='h-[calc(100vh-81px)]'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AuthLayouts;