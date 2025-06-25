import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import userImage from '../assets/user.png'
import { AuthContext } from '../Provider/AuthContext';


const Profile = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext)

    return (
        <div className='h-[calc(100vh-89px)] bg-sky-100 grid items-center  '>
            <div className="p-4 flex flex-col justify-center items-center mt-20 space-y-5">
                <div className='md:w-[500px] w-[300px] responsive-pr-reg'>
                <img
                    className='md:w-[500px] w-[300px] rounded-[50%]  p-1 border-3 border-green-500 mx-auto '
                    src={user.photoURL || userImage} alt="user" />
                </div>
                <h2 className='font-bold md:text-5xl text-2xl responsive-pr-f-reg '>{user.displayName ||'' }</h2>
                <h3 className='font-semibold md:text-3xl text-xl responsive-pr-f-reg '>{user.email}</h3>

                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
                    onClick={() => navigate("/profile/my-profile/update")}
                >
                    Update
                </button>
            </div>
        </div>


    );
};

export default Profile;