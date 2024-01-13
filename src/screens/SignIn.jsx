import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
// import { LockClosedIcon } from '@heroicons/react/20/solid'
import Dialog from "@material-ui/core/Dialog";
import CircleLoader from "react-spinners/CircleLoader";

import axios from '../api/axios';
const LOGIN_URL = '/api/v1/auth/login';


export default function SignIn() {
    const [open, setOpen] = React.useState(false);
    const [isLoading, setLoading]=useState(false);

    const handleClickToOpen = () => {
        setOpen(true);
    };
 
    const handleToClose = () => {
        setOpen(false);
    };
 
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
  
    const userRef = useRef();
    const errRef = useRef();
  
    const [email, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
  
    useEffect(() => {
        userRef.current?.focus();
    }, [])
  
    useEffect(() => {
        setErrMsg('');
    }, [email, pwd])
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ email, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(response?.data?.accessToken);
            const accessToken = response?.data?.accessToken;
            
            setAuth({ accessToken });
            setUser('');
            setPwd('');
            setLoading(false);
            navigate(from, { replace: true });
        } catch (err) {
            console.log(err?.response);
            setLoading(false);
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Email or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('User is Unauthorized. Please check your Email or Password');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current?.focus();
        }
    }

    return (
        <div>
            <button  style={{ padding: "10px 15px" }}
                onClick={handleClickToOpen}>
                Sign In
            </button>
            <Dialog open={open} onClose={handleToClose} maxWidth="sm" fullWidth >
                <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-md space-y-8">
                        <div>
                            <img
                                className="mx-auto h-28 w-auto"
                                src="/assets/logo.png"
                                alt=""
                            />
                            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                                Sign in to your account
                            </h2>
                        </div>

                        {isLoading ? 
                        (
                            <div className="flex justify-center">
                                <CircleLoader color="#6556FF" />
                            </div>
                        ):( 
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
                                            className="relative block w-full appearance-none rounded-none rounded-t-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Email address"
                                            onChange={(e) => setUser(e.target.value)}
                                            value={email}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="sr-only">
                                            Password
                                        </label>
                                        <input
                                            id="password"
                                            type="password"
                                            required
                                            className="relative block w-full appearance-none rounded-none rounded-b-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Password"
                                            onChange={(e) => setPwd(e.target.value)}
                                            value={pwd}
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="text-sm">
                                        <button className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Forgot your password?
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <button className="home-register button group relative flex w-full justify-center rounded-md border border-transparent bg-purple py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                        Sign in
                                    </button>
                                </div>

                                {errMsg && (
                                    <div className="bg-red-500 text-red w-fit text-sm py-1 px-3 rounded-md mt-2">
                                    {errMsg}
                                    </div>
                                )}
                            </form>
                        )}
                    </div>
                </div>


                <div className="mt-4 flex justify-end">
                    <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={handleToClose}
                    >
                        Got it, thanks!
                    </button>
                </div>

            </Dialog>
        </div>
    );
}