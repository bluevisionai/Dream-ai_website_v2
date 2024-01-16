import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from '../../api/axios';



const isValidEmail = (email) => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};


export default function PasswordResetEmailForm() {
    const [email, setEmail] = useState('');
    const [OTP, setOTP] = useState();
    const [isEmailValid, setEmailValid] = useState(true);
    const [errMsg, setErrMsg] = useState('');

    const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || "/";
  
    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setEmailValid(isValidEmail(newEmail));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isEmailValid) {
            const otp = Math.floor(100000 + Math.random() * 900000);
            console.log(otp);
            setOTP(otp);

            try {
                console.log(OTP);
                await axios.post('/api/v1/auth/send_recovery_email',
                    JSON.stringify({ email, OTP }),
                    {
                        headers: { 'Content-Type': 'application/json' },
                        withCredentials: true
                    }
                )
                .then(() => navigate('/reset-password/otp', { replace: false, state: { email:email, otp:OTP } }))
                .catch(console.log);
            } catch(error) {
                if (!error?.response) {
                    setErrMsg('No Server Response');
                } 
                // else if (error.response?.status === 400) {
                //     setErrMsg(error.response?.message);
                // } else if (error.response?.status === 401) {
                //     setErrMsg(error.response?.message);
                // }
                setErrMsg(error.response?.message);
            }

            // navigate('/reset-password/otp', { replace: false, state: { email:email, otp:otp } });
            
        } else {
            setErrMsg('Invalid Email');
            return;

        }
       
    }

    const handleNavigateBack  = () => {
        navigate("/", { replace: false });
    }

    useEffect(() => {
        setErrMsg('');
    },[])

	return (
        <div>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img
                            className="mx-auto h-28 w-auto"
                            src="/assets/logo.png"
                            alt=""
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Reset Password
                        </h2>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    type="email"
                                    autoComplete="off"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Email address"
                                    onChange={handleEmailChange}
                                    // value={email}
                                />
                                {!isEmailValid && (
                                    <span style={{ color: 'red' }}>❌</span>
                                )}
                                {isEmailValid && email && (
                                    <span style={{ color: 'green' }}>✔</span>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                            </div>
                        </div>

                        {errMsg && (
                            <div className="bg-red-500 text-red w-fit text-sm py-1 px-3 rounded-md mt-2">
                            {errMsg}
                            </div>
                        )}

                        <div>
                            <button className="home-register button group relative flex w-full justify-center rounded-md border border-transparent bg-purple py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                Send OTP
                            </button>
                        </div>
                    </form>
                    
                    <div className="mt-4 flex justify-end">
                        <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={handleNavigateBack}
                        >
                            Take Me Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
	);
}