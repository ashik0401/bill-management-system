import React from 'react';

const Services = () => {
    const services = [
        { title: "Bill Payment", icon: "💳", desc: "Pay utility bills easily" },
        { title: "Mobile Recharge", icon: "📱", desc: "Top up any mobile operator" },
        { title: "Fund Transfer", icon: "💸", desc: "Transfer money instantly" },
        { title: "Mini Statement", icon: "📄", desc: "View recent transactions" },
      ];
      

    return (
        <div className="py-10 bg-sky-100 mt-5">
        <h2 className="text-xl font-semibold text-center mb-6">Our Services</h2>
        <div className="grid px-10 grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow hover:shadow-lg text-center">
              <div className="text-3xl mb-2">{s.icon}</div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm text-gray-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Services;