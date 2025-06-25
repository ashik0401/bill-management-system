import React from 'react';
import { Link } from 'react-router';
import img from '../assets/Error-404.avif'

const Error = () => {
    return (
        <div className=''>
        <div className='flex flex-col bg-white rounded-2xl items-center  space-y-3 p-15 min-h-screen'>
            <div className='/Error-404.avif '>
                <img className='w-96' src={img}
                    alt="4O4" />
            </div>
            <h2 className='text-2xl md:text-5xl font-bold text-red-500'>4O4 - Page Not Found</h2>
            <p className='font-bold text-lg opacity-80'>Oops! The page you are looking for was not found.</p>
            <Link to='/'>
                <button className='btn  rounded-lg  text-white bg-[#176AE5]'>
                    Go Back Home
                </button>
            </Link>
        </div>
    </div>
    );
};

export default Error;