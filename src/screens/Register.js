import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import Dialog from "@material-ui/core/Dialog";
import { CircleLoader } from "react-spinners";
import useAuth from '../hooks/useAuth';
import axios from '../api/axios';


const isValidEmail = (email) => {
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default function App() {
    const [open, setOpen] = React.useState(false);
    const [isLoading, setLoading] = useState(false);
    const [isEmailValid, setEmailValid] = useState(true); // Added state for email validation

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

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [matchPwd, setMatchPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current?.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, email, pwd, matchPwd])

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setEmailValid(isValidEmail(newEmail));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!isEmailValid) {
            setErrMsg('Invalid Email');
            setLoading(false);
            return;
        }

        if (pwd !== matchPwd) {
            setErrMsg('Passwords do not match');
            setLoading(false);
            return;
        }

        if (!pwd || !matchPwd) {
            setErrMsg('Password cannot be empty');
            setLoading(false);
            return;
        }

        const role = process.env.REACT_APP_USER_ROLE;
        console.log("role: " + role)
        console.log("user: " + user)
        console.log("email: " + email)
        console.log("pwd: " + pwd)

        try {
            const response = await axios.post('/api/v1/auth/register',
                JSON.stringify({ user, email, pwd, role }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            
            const accessToken = response?.data?.access_token;
            
            setAuth({ accessToken });
            setUser('');
            setEmail('');
            setPwd('');
            setMatchPwd('');
            setLoading(false);
            navigate(from, { replace: true });
        } catch (err) {
            // setUser('');
            // setEmail('');
            // setPwd('');
            // setMatchPwd('');
            setLoading(false);
            console.log(err?.response);
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Email is already in use.');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current?.focus();
        }
    }

    return (
        <div>
            <button className="radius8 lightBg" style={{ padding: "10px 15px" }}
                onClick={handleClickToOpen}>
                Sign Up
            </button>
            <Dialog open={open} onClose={handleToClose}  maxWidth="sm" fullWidth >
                <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img
                            className="mx-auto h-28 w-auto"
                            src="/assets/logo.png"
                            alt="logo black"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Register your account
                        </h2>
                    </div>

                    {isLoading ? 
                    (
                        <div className="flex justify-center">
                            <CircleLoader color="#6556FF" />
                        </div>
                    ):( 
                        <form onSubmit={handleSubmit} className="mt-8 space-y-6" action="#" method="POST">
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="-space-y-px rounded-md shadow-sm">
                                <div>
                                    <input
                                        id="full-mame"
                                        name="fullmame"
                                        type="text"
                                        required
                                        className="relative block w-full appearance-none rounded-none rounded-t-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Full Name"
                                        onChange={(e) => setUser(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        required
                                        className={`relative block w-full appearance-none rounded-none border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm ${!isEmailValid ? 'border-red-500' : 'border-gray-500'}`}
                                        placeholder="Email address"
                                        onChange={handleEmailChange}
                                    />
                                    {!isEmailValid && (
                                        <span style={{ color: 'red' }}>❌</span>
                                    )}
                                    {isEmailValid && email && (
                                        <span style={{ color: 'green' }}>✔</span>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        className="relative block w-full appearance-none rounded-none rounded-b-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Password"
                                        onChange={(e) => setPwd(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        Confirm Password:
                                    </label>
                                    <input
                                        id="cornfirm_password"
                                        type="password"
                                        value={matchPwd}
                                        required
                                        className="relative block w-full appearance-none rounded-none rounded-b-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Confirm Password"
                                        onChange={(e) => setMatchPwd(e.target.value)}
                                    />
                                    {matchPwd === pwd && matchPwd !== '' && (
                                        <span style={{ color: 'green' }}>✔</span>
                                    )}
                                    {matchPwd !== pwd && matchPwd !== '' && (
                                        <span style={{ color: 'red' }}>❌</span>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>
                            </div>

                            {errMsg && (
                                <div className="bg-red-500 text-red w-fit text-sm py-1 px-3 rounded-md mt-2">
                                {errMsg}
                                </div>
                            )}
                            
                            <div>
                                <button className="home-register button group relative flex w-full justify-center rounded-md border border-transparent bg-purple py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" >
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>


            <div className="mt-4 flex justify-end">
                <button
                    onClick={handleToClose}
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 "
                >
                    Got it, thanks!
                </button>
            </div>
            </Dialog>
        </div>
    );
}







// import React, { useRef, useState, useEffect } from "react";
// import { useNavigate, useLocation } from 'react-router-dom';
// import Dialog from "@material-ui/core/Dialog";
// // import { LockClosedIcon } from '@heroicons/react/20/solid';
// import CircleLoader from "react-spinners/CircleLoader";

// import useAuth from '../hooks/useAuth';
// import axios from '../api/axios';

// // const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// // const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// // const EMAIL_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const REGISTER_URL = '/api/v1/auth/register';

// export default function App() {
//     const [open, setOpen] = React.useState(false);
//     const [isLoading, setLoading]=useState(false);

//     const handleClickToOpen = () => {
//         setOpen(true);
//     };

//     const handleToClose = () => {
//         setOpen(false);
//     };

//     const { setAuth } = useAuth();
    
//     const navigate = useNavigate();
//     const location = useLocation();
//     const from = location.state?.from?.pathname || "/";

//     const userRef = useRef();
//     const errRef = useRef();

//     const [user, setUser] = useState('');
//     const [email, setEmail] = useState('');

//     const [pwd, setPwd] = useState('');

//     const [matchPwd, setMatchPwd] = useState('');

//     const [errMsg, setErrMsg] = useState('');

//     useEffect(() => {
//         userRef.current?.focus();
//     }, [])

//     useEffect(() => {
//         setErrMsg('');
//     }, [user, email, pwd, matchPwd])

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         // if button enabled with JS hack
//         //   const v1 = USER_REGEX.test(user);
//         //   const v2 = PWD_REGEX.test(pwd);
//         const role = process.env.REACT_APP_USER_ROLE;

//         //   if (!v1 || !v2) {
//         //       setErrMsg("Invalid Entry");
//         //       return;
//         //   }
//         try {
//             const response = await axios.post(REGISTER_URL,
//                 JSON.stringify({ user,email, pwd, role }),
//                 {
//                     headers: { 'Content-Type': 'application/json' },
//                       withCredentials: true
//                 }
//             );
//             // TODO: remove console.logs before deployment
//             // console.log(JSON.stringify(response?.data));
//             const accessToken = response?.data?.access_token;
//             // const roles = response?.data?.user?.role;
            
//             setAuth({ accessToken });
//             //clear state and controlled inputs
//             setUser('');
//             setPwd('');
//             setMatchPwd('');
//             setLoading(false);
//             // handleToClose();
//             navigate(from, { replace: true });
//         } catch (err) {
//             setLoading(false);
//             if (!err?.response) {
//                 setErrMsg('No Server Response');
//             } else if (err.response?.status === 409) {
//                 setErrMsg('Username Taken');
//             } else {
//                 setErrMsg('Registration Failed')
//             }
//             errRef.current?.focus();
//         }
//     }

//     return (
//         <div>
//             <button className="radius8 lightBg" style={{ padding: "10px 15px" }}
//                 onClick={handleClickToOpen}>
//                 Sign Up
//             </button>
//             <Dialog open={open} onClose={handleToClose}  maxWidth="sm" fullWidth >
//                 <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//                 <div className="w-full max-w-md space-y-8">
//                     <div>
//                         <img
//                             className="mx-auto h-28 w-auto"
//                             src="/assets/logo.png"
//                             alt="logo black"
//                         />
//                         <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
//                             Register your account
//                         </h2>
//                     </div>

//                     {isLoading ? 
//                     (
//                         <div className="flex justify-center">
//                             <CircleLoader color="#6556FF" />
//                         </div>
//                     ):( 
//                         <form onSubmit={handleSubmit} className="mt-8 space-y-6" action="#" method="POST">
//                             <input type="hidden" name="remember" defaultValue="true" />
//                             <div className="-space-y-px rounded-md shadow-sm">
//                                 <div>
//                                     <input
//                                         id="full-mame"
//                                         name="fullmame"
//                                         type="text"
//                                         required
//                                         className="relative block w-full appearance-none rounded-none rounded-t-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//                                         placeholder="Full Name"
//                                         onChange={(e) => setUser(e.target.value)}
//                                     />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="email-address" className="sr-only">
//                                         Email address
//                                     </label>
//                                     <input
//                                         id="email-address"
//                                         name="email"
//                                         type="email"
//                                         required
//                                         className="relative block w-full appearance-none rounded-none border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//                                         placeholder="Email address"
//                                         onChange={(e) => setEmail(e.target.value)}
//                                     />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="password" className="sr-only">
//                                         Password
//                                     </label>
//                                     <input
//                                         id="password"
//                                         name="password"
//                                         type="password"
//                                         required
//                                         className="relative block w-full appearance-none rounded-none rounded-b-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//                                         placeholder="Password"
//                                         onChange={(e) => setPwd(e.target.value)}
//                                     />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="password" className="sr-only">
//                                         Confirm Password:
//                                     </label>
//                                     <input
//                                         id="cornfirm_password"
//                                         type="password"
//                                         value={matchPwd}
//                                         required
//                                         className="relative block w-full appearance-none rounded-none rounded-b-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//                                         placeholder="Confirm Password"
//                                         onChange={(e) => setMatchPwd(e.target.value)}
//                                     />
//                                 </div>
//                             </div>

//                             <div className="flex items-center justify-between">
//                                 <div className="flex items-center">
//                                     <input
//                                         id="remember-me"
//                                         name="remember-me"
//                                         type="checkbox"
//                                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
//                                     />
//                                     <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
//                                         Remember me
//                                     </label>
//                                 </div>

//                             </div>

//                             {errMsg && (
//                                 <div className="bg-red-500 text-red w-fit text-sm py-1 px-3 rounded-md mt-2">
//                                 {errMsg}
//                                 </div>
//                             )}
                            
//                             <div>
//                                 <button className="home-register button group relative flex w-full justify-center rounded-md border border-transparent bg-purple py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" >
//                                     Sign Up
//                                 </button>
//                             </div>
//                         </form>
//                     )}
//                 </div>
//             </div>


//             <div className="mt-4 flex justify-end">
//                 <button
//                     onClick={handleToClose}
//                     type="button"
//                     className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 "
//                 >
//                     Got it, thanks!
//                 </button>
//             </div>
//             </Dialog>
//         </div>
//     );
// }

