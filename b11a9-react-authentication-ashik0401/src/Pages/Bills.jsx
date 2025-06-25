import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import Billing from '../Component/Billing';

const Bills = () => {
    const data = useLoaderData();
    const [selectedBillType, setSelectedBillType] = useState('');
    const [filteredBills, setFilteredBills] = useState(data);

    const billTypes = ['All', ...new Set(data.map(bill => bill.bill_type))];

    useEffect(() => {
        if (selectedBillType && selectedBillType !== 'All') {
            const filtered = data.filter(bill => bill.bill_type === selectedBillType);
            setFilteredBills(filtered);
        } else {
            setFilteredBills(data);
        }
    }, [selectedBillType, data]);

    return (
        <div className='bg-sky-100 ma pb-10 min-h-screen'>
            <h2 className='text-4xl font-bold text-center py-10'>MY Bills</h2>

            <div className='flex justify-center mb-6'>
                <select
                    value={selectedBillType}
                    onChange={(e) => setSelectedBillType(e.target.value)}
                    className='px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                >
                    {billTypes.map((type, index) => (
                        <option key={index} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </div>

            <div className='grid gap-4 justify-center'>
                {filteredBills.map(item => (
                    <Billing key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Bills;