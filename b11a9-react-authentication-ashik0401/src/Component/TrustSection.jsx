import React from 'react';

const TrustSection = () => {

    const items = [
        { icon: "🔒", text: "Secure & Encrypted" },
        { icon: "🏆", text: "ISO Certified Gateway" },
        { icon: "💼", text: "Trusted by 1M+ Users" },
    ];

    return (
        <div className="py-10 bg-sky-100 text-center">
            <h2 className="text-xl font-semibold mb-6">Why Trust Us?</h2>
            <div className="flex justify-center gap-6 flex-wrap px-10">
                {items.map((item, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl shadow w-60">
                        <div className="text-4xl mb-2">{item.icon}</div>
                        <p className="font-medium">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrustSection;