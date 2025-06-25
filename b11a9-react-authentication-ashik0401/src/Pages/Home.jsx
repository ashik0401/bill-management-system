import React from 'react';
import TrustSection from '../Component/TrustSection';
import Services from '../Component/Services';
import { useLoaderData } from 'react-router';
import Company from '../Component/Company';
import Offers from '../Component/Offers';
import Slide from '../Component/Slide';

import '../Component/Slide'

const Home = () => {

    const data = useLoaderData();
   


    return (
        <div className='bg-sky-100 pt-2'>
            <Slide></Slide>
            <Offers></Offers>
            <div className=' w-11/12 mx-auto mt-10'>
                <h2 className='text-2xl font-semibold mb-3'>🏦 Select Your Preferred Mobile Banking Service..</h2>
                <div className='grid lg:grid-cols-4 gap-5 md:grid-cols-3 grid-cols-2'>

                    {Array.isArray(data) &&
                        data.map(item => <Company key={item.id} item={item} />)
                    }

                </div>
            </div>

            <Services ></Services>
            <TrustSection></TrustSection>
        </div>
    );
};

export default Home;