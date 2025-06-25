import React, { useEffect, useState } from 'react';
import Loading from '../Component/Loading';

const Offers = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/OfferData.json')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-12 md:mt-10 w-11/12 mx-auto">
      <div className="max-w-7xl mx-auto px-4">
        {loading ? (
          <Loading />
        ) : (
          <>
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">
              New & Exciting Offers
            </h2>
            <div className="flex w-full gap-10 flex-wrap justify-center">
              {data.map((offer, index) => (
                <div
                  key={index}
                  className="card w-80 h-[400px] bg-white shadow-md hover:shadow-xl transition duration-300 rounded-xl overflow-hidden flex flex-col"
                >
                  <figure className="h-60 w-full overflow-hidden">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="h-full w-full object-cover"
                    />
                  </figure>
                  <div className="card-body flex flex-col justify-between flex-1 p-4">
                    <h3 className="card-title text-xl font-semibold">{offer.title}</h3>
                    <p className="text-gray-600 text-sm">{offer.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Offers;
