import React from 'react';
import { Link } from 'react-router';

const Billing = ({ item }) => {
  const { bill_type, bill_type_icon, organization, amount, due_date, logo,id } = item;

  return (
    <div className="bg-base-200 mb-10 md:h-72 w-11/12  mx-auto grid md:items-center p-5 rounded-xl shadow-md hover:shadow-xl border border-gray-300 ">
      <div className="md:flex justify-between gap-10 items-center space-y-5 custom-img-responsive">
        <div className="relative  ">
          <img
            src={logo}
            className="rounded-lg border border-gray-300  w object-cover w-[400px] h-[250px] "
            alt={organization}
          />
          <div className="absolute -bottom-0.5 -right-2 ">
            <img 
            className='md:w-15 w-8 rounded-[50%]'
            src={bill_type_icon} alt="" />
          </div>
        </div>

        <div className=" w-[80%] h-full responsive-text">
          <div className='lg:flex custom-responsive   responsive-text lg:justify-between items-center '>
            <h1 className="lg:text-2xl text-lg font-bold">{organization}</h1>
            <h3 className="capitalize text-xl text-">{bill_type}</h3>
            <h2 className='text-lg'>
              Amount: <strong>{amount}</strong>
            </h2>
            <h3 className='text-lg'>Due Date: {due_date}</h3>

            <Link to={`/bills/${id}`}>
            <button className="btn bg-sky-300">View Details</button>
            </Link>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Billing;