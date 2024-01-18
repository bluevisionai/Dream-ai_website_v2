import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

import axios from '../../api/axios';


export default function PasswordChangeForm() {   
    const location = useLocation();
	const {email} = location.state; 
    
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();

    const [pwd, setPwd] = useState('');
    const [matchPwd, setMatchPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current?.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [])
	
	const handleSubmit = async (e) => {
	e.preventDefault();

	if (pwd !== matchPwd) {
		setErrMsg('Passwords do not match');
		return;
	}

	if (!pwd || !matchPwd) {
		setErrMsg('Password cannot be empty');
		return;
	}

	try {
		await axios.patch('/api/v1/auth/password_reset',
			JSON.stringify({ email, pwd }),
			{
				headers: { 'Content-Type': 'application/json' },
				withCredentials: true
			}
		)
		.then(() => setPwd(''))
		.then(() => setMatchPwd(''))
		.then(() => navigate(from, { replace: true }))
		.catch(console.log);
	} catch (error) {
		console.log(error?.response);
		if (!error?.response) {
			setErrMsg('No Server Response');
		} 
		// else if (error.response?.status === 409) {
		// 	setErrMsg('Email is already in use.');
		// } else {
		// 	setErrMsg('Registration Failed')
		// }
		setErrMsg(error.response?.message);
		errRef.current?.focus();
	}
}
const handleNavigateBack  = () => {
	navigate("/reset-password/otp", { replace: false });
}

const handleNavigateHome  = () => {
	navigate("/", { replace: false });
}
  return (
	<div>
		<div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="w-full max-w-md space-y-8">
				<div>
					<img
						className="mx-auto h-28 w-auto"
						src="/assets/logo.png"
						alt="logo black"
					/>
					<h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
						Reset Password
					</h2>
				</div>
				<form onSubmit={handleSubmit} className="mt-8 space-y-6" action="#" method="POST">
					<input type="hidden" name="remember" defaultValue="true" />
					<div className="-space-y-px rounded-md shadow-sm">
						<div>
							<label htmlFor="password" className="sr-only">
								Password
							</label>
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="off"
								value={pwd}
								required
								className="relative block w-full appearance-none rounded-none rounded-t-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
								placeholder="Password"
								onChange={(e) => setPwd(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor="password" className="sr-only">
								Confirm Password:
							</label>
							<input
								id="confirm_password"
								type="password"
								name="confirm_password"
								autoComplete="off"
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

					{errMsg && (
						<div className="bg-red-500 text-red w-fit text-sm py-1 px-3 rounded-md mt-2">
						{errMsg}
						</div>
					)}
					
					<div>
						<button className="home-register button group relative flex w-full justify-center rounded-md border border-transparent bg-purple py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" >
							Reset Password
						</button>
					</div>
				</form>
				<div className=" flex justify-between">
					<div className="mt-4  justify-start">
						<button
							type="button"
							className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
							onClick={handleNavigateHome}
						>
							Take Me Home
						</button>
					</div>

					<div className="mt-4  justify-end">
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
	</div>
  );
}
