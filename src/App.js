import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'

// Screens
import Layout from "./Layout";
import { Route, Routes } from "react-router-dom";


import Landing from "./screens/Landing";
import Dashboard from "./screens/dashboard/Dashboard";
import History from "./screens/dashboard/History";
import Profile from "./screens/dashboard/Profile";
import MainLayout from "./screens/dashboard/layout/MainLayout";
import NotFound from "./screens/NotFound.js";
import PasswordResetEmailForm from "./screens/resetPassword/PasswordReset.jsx";
import OtpForm from "./screens/resetPassword/OtpForm.jsx";
import PasswordChangeForm from "./screens/resetPassword/PasswordChangeForm.jsx";

import RequireAuth from "./context/RequireAuth";
import PersistLogin from "./context/PersistLogin";


import Blank from './screens/dashboard/Blank'

const ROLES = {
	'User': process.env.REACT_APP_USER_ROLE,
	'Admin': process.env.REACT_APP_ADMIN_ROLE
}

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>

				{/* public routes */}
				<Route path="home" element={<Landing />} />
				
					<Route path="reset-password/email" element={<PasswordResetEmailForm />} />
					<Route path="reset-password/otp" element={<OtpForm />} />
					<Route path="reset-password/change-password" element={<PasswordChangeForm />} />
				

				{/* we want to protect these routes */}
				<Route element={<PersistLogin />}>
					<Route element={<RequireAuth  allowedRoles={[ROLES.User]}/>}>
						<Route path="/" element={<MainLayout />}>
							<Route index element={<Dashboard />} />
							<Route path="dream_dictionary" element={<History />} />
							<Route path="products" element={<Blank />} />
							<Route path="profile" element={<Profile />} />
							<Route path="settings" element={<Blank />} />
							<Route path="stats" element={<Blank />} />
						</Route>
					</Route>
				</Route>
				
				{/* catch all */}
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}

