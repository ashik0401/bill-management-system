import React from 'react';
const Company = ({ item }) => {
  const { name, logo, bill_types } = item;

  return (
    <div 
    
    className="h-[300px] ">
      <div className="card bg-base-100 h-full shadow-md hover:shadow-lg transition duration-300 flex flex-col justify-between cursor-pointer hover:bg-sky-50">
        <figure className="px-10 pt-10">
          <img
            src={logo}
            alt={name}
            className="rounded-xl h-16 w-auto object-contain"
          />
        </figure>
        <div className="card-body items-center text-center flex flex-col flex-grow">
          <h2 className="card-title">{name}</h2>
          <div className="text-start w-full overflow-auto">
            {bill_types.map((b, i) => (
              <p key={i}>{b}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
