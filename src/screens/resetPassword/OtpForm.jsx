import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form } from 'antd';
import { InputOTP } from 'antd-input-otp';

import axios from '../../api/axios';


export default function OtpForm() {
    const location = useLocation();
	const {email, otp} = location.state;

    const [errMsg, setErrMsg] = useState('');
	const [timerCount, setTimer] = useState(60);
	const [disable, setDisable] = useState(true);
  
	const [OTP, setOTP] = useState([]);
  


    const navigate = useNavigate();

    const handleNavigateBack  = () => {
        navigate("/reset-password/email", { replace: false });
    }

    const handleNavigateHome  = () => {
        navigate("/", { replace: false });
    }

	useEffect(() => {
		let interval = setInterval(() => {
			setTimer((lastTimerCount) => {
				lastTimerCount <= 1 && clearInterval(interval);
				if (lastTimerCount <= 1) setDisable(false);
				if (lastTimerCount <= 0) return lastTimerCount;
				return lastTimerCount - 1;
			});
		}, 1000); //each count lasts for a second
		//cleanup the interval on complete
		return () => clearInterval(interval);
	}, []);

	const resendOTP = (e) =>  { 
		e.preventDefault();
		if (disable) return;
		try {
			axios.post("/api/v1/auth/send_recovery_email", 
				JSON.stringify({ email, otp }),
				{
					headers: { 'Content-Type': 'application/json' },
					withCredentials: true
				})
			.then(() => setDisable(true))
			.then(() => alert("A new OTP has successfully been sent to your email."))
			.then(() => setTimer(60))
			.catch(console.log);
		} catch(error) {
			if (!error?.response) {
				setErrMsg('No Server Response');
			} 
			// else if (error.response?.status === 400) {
			// 	setErrMsg(error.response?.message);
			// } else if (error.response?.status === 401) {
			// 	setErrMsg(error.response?.message);
			// }
			setErrMsg(error.response?.message);
		}
		
	}

	const handleFinish = () => {
		console.log("otp: "+ otp)
		console.log("OTP: "+ OTP.join("")) 
		
		if (parseInt(OTP.join("")) === otp) {
			navigate('/reset-password/change-password', { replace: false, state: { email:email } });
		}
	};

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

					<div className=" items-center text-sm font-medium text-gray-400">
						<p>We have sent a code to your email {email} : {otp}</p>
					</div>
				</div>

				<div className="mt-6 items-center justify-center w-full">
					
					<Form >
						<Form.Item label="OTP" name="otp">
							<InputOTP inputType="numeric" onChange={setOTP} value={OTP} autoSubmit={handleFinish} />
						</Form.Item> 
						<Form.Item>
							<button 
								onClick={() => handleFinish()}
								className="home-register button group relative flex w-full justify-center rounded-md border border-transparent bg-purple py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
							>
								Verify Account
							</button>
						</Form.Item>
					</Form>
				</div>

				<div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
					<p>Didn't receive code?</p>{" "}
					<button
						className="flex flex-row items-center"
						style={{
							color: disable ? "gray" : "blue",
							cursor: disable ? "none" : "pointer",
							textDecorationLine: disable ? "none" : "underline",
						}}
						onClick={() => resendOTP()}
						>
							{disable ? `Resend OTP in ${timerCount}s` : "Resend OTP"}
					</button>
				</div>
				<div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
					{errMsg && (
						<div className="bg-red-500 text-red w-fit text-sm py-1 px-3 rounded-md mt-2">
							{errMsg}
						</div>
					)}
				</div>
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


