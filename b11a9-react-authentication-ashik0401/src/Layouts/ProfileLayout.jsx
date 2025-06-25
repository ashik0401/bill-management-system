import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Navbar';


const ProfileLayout = () => {
    return (
        <div className=''>
          <header className='bg-sky-300 '>
          <Navbar></Navbar>
          </header>
            <main className='lg:h-[calc(100vh-81px)] sm:h-[calc(100vh-64px)]  bg-sky-100 grid items-center  h-[calc(100vh-72px)]'>
            <Outlet></Outlet>
            </main>
          
        </div>
    );
};

export default ProfileLayout;