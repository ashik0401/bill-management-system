import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import image from '../assets/banner.jpg'
import Banner from '../Component/Banner';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div>
            <div className="bg-url bg-cover"
                style={{ backgroundImage: `url(${image})` }}
            >
                <Navbar></Navbar>
                <Banner></Banner>
            </div>
            <div className="">
                <Outlet></Outlet>
            </div>
            <div className="">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default HomeLayout;