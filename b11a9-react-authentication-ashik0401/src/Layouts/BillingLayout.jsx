import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer';

const BillingLayout = () => {
    return (
        <div>
            <header className='bg-sky-300 '>
                <Navbar></Navbar>

            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default BillingLayout;