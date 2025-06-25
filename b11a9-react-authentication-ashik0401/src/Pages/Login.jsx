import React, { useContext, useRef, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../Firebase.config';
import toast from 'react-hot-toast';

const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const { logIn, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const emailRef = useRef();



    const handleLogIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        



        logIn(email, password)
            .then(() => {
                navigate(`${location.state ? location.state : '/'}`)

            })
            .catch(() => {
                setError('Enter valid Password')
            });
    }

    const handleForgetPass = () => {
        const email = emailRef.current.value;

        setError('');

        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success('A password reset email is sent . Please check your email ')
            })
            .catch((error) => {
                setError(error.message)
            })
    }

    const handleGoogleLogin = () => {
        googleSignIn()
        .then(() => {
            navigate(`${location.state ? location.state : '/'}`)

        })
        .catch((error) => {
            setError(error.message)
        });
}




    return (
        <div className="hero pt-40 bg-sky-100  px-10">
            <div className="card  bg-sky-100 w-full md:max-w-sm shadow-2xl responsive-card ">
                <div className="card-body">
                    <form
                        onSubmit={handleLogIn}
                        className="md:space-y-4">
                        <h2 className="md:text-2xl text-lg font-semibold text-center text-sky-700">Login to your account</h2>

                        <div>
                            <label className="label md:text-lg">Email</label>
                            <input
                                type="email"
                                name="email"
                                ref={emailRef}
                                className="input input-bordered w-full focus:outline-none"
                                placeholder="Email"
                                required
                            />
                        </div>

                        <div>
                            <span className='label md:text-lg'>Password</span>
                            <label className="input focus-within:outline-none w-full">
                                <input
                                    type={showPass ? 'text' : 'password'}
                                    name="password"
                                    autoComplete="password"
                                    required
                                    placeholder="Password"
                                    className="focus:outline-none w-full"
                                />
                                <p onClick={() => setShowPass(!showPass)} className="cursor-pointer">
                                    {showPass ? <FaEyeSlash /> : <FaEye />}
                                </p>
                            </label>
                            {
                                error && <p className='text-red-500'>{error}</p>
                            }

                        </div>
                        <div onClick={handleForgetPass}>
                            <a className="link link-hover text-primary">Forgot password?</a>
                        </div>

                        <button
                            type="submit"
                            className="btn bg-sky-400 hover:bg-sky-500 w-full mt-2">
                            Login
                        </button>

                        <p className="text-center text-sm ">
                            Don’t have an account?
                            <Link to="/auth/register">
                                <span className="ml-1 text-secondary hover:underline font-semibold">Register</span>
                            </Link>
                        </p>

                    </form>
                    <button
                        onClick={handleGoogleLogin}
                        className="btn w-full hover:bg-sky-200 text-black border-[#e5e5e5] mt-4">
                        <svg aria-label="Google logo" width="16" height="16" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                            <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                            <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                            <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
                        </svg>
                        <span className="ml-2">Login with Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;