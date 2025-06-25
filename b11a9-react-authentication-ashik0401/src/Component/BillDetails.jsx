import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { FaCheckCircle } from 'react-icons/fa';

const BillDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();

    const singleCard = data.find(card => card.id === +id);
    const { bill_type, bill_type_icon, organization, amount, due_date, logo } = singleCard;

    const [isPaid, setIsPaid] = useState(false);

    useEffect(() => {
        const paidBills = JSON.parse(localStorage.getItem('paidBills')) || [];
        if (paidBills.includes(id)) {
            setIsPaid(true);
        }
    }, [id]);

    const handlePayBill = () => {
        if (isPaid) return;
        setIsPaid(true);
        
        const paidBills = JSON.parse(localStorage.getItem('paidBills')) || [];
        if (!paidBills.includes(id)) {
            paidBills.push(id);
            localStorage.setItem('paidBills', JSON.stringify(paidBills));
        }

        const storedBalance = localStorage.getItem('balance');
        const currentBalance = storedBalance ? parseFloat(storedBalance) : 10000;
        const newBalance = currentBalance - parseFloat(amount);
        localStorage.setItem('balance', newBalance.toFixed(2));
        window.dispatchEvent(new Event('balanceChange'));
    };

    return (
        <div className='bg-sky-100 lg:h-[calc(100vh-280px)] md:h-[calc(100vh-256px)] p-5 items-center justify-center flex responsive'>
            <div className="border border-gray-300 bg-base-200 md:h-72 md:w-8/12 mx-auto grid md:items-center p-5 rounded-xl shadow-md hover:shadow-xl">
                <div className="md:flex justify-between gap-10 items-center space-y-5 custom-img-responsive">
                    <div className="relative border border-gray-300 rounded-2xl">
                        <img
                            src={logo}
                            className="rounded-2xl object-cover w-[400px] h-[250px]"
                            alt={organization}
                        />
                        <div className="absolute -bottom-0.5 -right-2">
                            <img
                                className='md:w-15 w-8 rounded-[50%]'
                                src={bill_type_icon} alt=""
                            />
                        </div>
                    </div>

                    <div className="w-[80%] h-full custom-img-responsive">
                        <div className='custom-responsive lg:justify-between items-center'>
                            <h1 className="lg:text-2xl text-lg font-bold">{organization}</h1>
                            <h3 className="capitalize text-xl">{bill_type}</h3>
                            <h2 className='text-lg'>
                                Amount: <strong>{amount}</strong>
                            </h2>
                            <h3 className='text-lg'>Due Date: {due_date}</h3>

                            <button
                                className={`btn ${isPaid ? 'bg-green-400 cursor-not-allowed' : 'bg-sky-300'}`}
                                onClick={handlePayBill}
                                disabled={isPaid}
                            >
                                {isPaid ? (
                                    <>
                                        Paid<FaCheckCircle className="ml-2" color="green" />
                                    </>
                                ) : 'Pay Bill'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BillDetails;
