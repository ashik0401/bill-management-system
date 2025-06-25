import React, { useState, useContext } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';

const Register = () => {
    const [showPass, setShowPass] = useState(false);
    const { createUser, setUser, updateUser, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');



    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.image_url.value;
        const password = e.target.password.value;

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo }).then(() => {
                    setUser({ ...user, displayName: name, photoURL: photo })
                })
                    .catch(() => {
                        setUser(user)
                    })

                navigate('/')
            
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode, errorMessage)

            });



    };


    const handleGoogleReg = () => {
        googleSignIn()
            .then(() => {
                navigate('/')

            })
            .catch((error) => {
                setError(error.message)
            });
    }



    return (
        <div className="hero bg-sky-100  pt-20 px-5">
            <div className="card bg-sky-100 w-full md:max-w-sm shadow-2xl responsive-card-reg">
                <div className="card-body w-11/12 mx-auto">
                    <form onSubmit={handleRegister} className="md:space-y-4">
                        <h2 className="font-semibold md:text-2xl text-lg text-center text-sky-700">Register your account</h2>

                        <div>
                            <label className="label md:text-lg">Name</label>
                            <input type="text" name="name" className="input input-bordered w-full focus:outline-none" placeholder="Full Name" required />
                        </div>

                        <div>
                            <label className="label md:text-lg">Email</label>
                            <input type="email" name="email" className="input input-bordered w-full focus:outline-none" placeholder="Email" required />
                        </div>

                        <div>
                            <label className="label md:text-lg">Image URL</label>
                            <input type="text" name="image_url" className="input input-bordered w-full focus:outline-none" placeholder="Profile Image URL" />
                        </div>

                        <div>
                            <span className="label md:text-lg">Password</span>
                            <label className="input flex items-center gap-2  focus-within:outline-none ">
                                <input
                                    type={showPass ? 'text' : 'password'}
                                    name="password"
                                    autoComplete="password"
                                    required
                                    placeholder="Password"
                                    minLength="8"
                                    className="w-full focus:outline-none"
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                                />
                                <span onClick={() => setShowPass(!showPass)} className="cursor-pointer">
                                    {showPass ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </label>
                        </div>

                        {
                            error && <p className='text-red-500'>{error}</p>
                        }

                        <button
                            type="submit"
                            className="btn bg-sky-400 hover:bg-sky-500 w-full mt-5">
                            Register
                        </button>

                        <p className="text-center mt-4">
                            Already have an Account?
                            <Link to="/auth/login">
                                <span className="ml-1 text-secondary hover:underline font-semibold">Login</span>
                            </Link>
                        </p>
                    </form>

                    <button
                        onClick={handleGoogleReg}
                        className="btn w-full hover:bg-sky-200 text-black border-[#e5e5e5] mt-4">
                        <svg aria-label="Google logo" width="16" height="16" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                            <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                            <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                            <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
                        </svg>
                        <span className="ml-2">Continue with Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
