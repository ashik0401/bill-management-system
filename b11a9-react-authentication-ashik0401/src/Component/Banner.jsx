import React from 'react';
import image from '../assets/bill-payment-.jpg'
const Banner = () => {
    return (
        <div className='flex flex-col-reverse  md:flex-row md:gap-10 justify-center items-center p-5 md:p-10 Md:items-center Md:justify-around  md:h-[400px] '>
            <div className="space-y-2 mt-6 md:mt-0">
                <h1 className=' text-2xl md:text-5xl  font-bold '>Premier Billing. Refined Control.</h1>
                <h2 className='md:text-2xl font-semibold text-white'>Experience the art of effortless financial management. <br />
                    Elegant automation, seamless oversight— <br />
                    Billing, elevated to prestige.

                </h2>
               
            </div>
            <div className="">
                <img className='w-96 rounded-4xl' src={image} alt="" />
            </div>
        </div>
    );
};

export default Banner;