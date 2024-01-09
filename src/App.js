// import React from "react";
// import { Helmet } from "react-helmet";
// import { Helmet, HelmetProvider } from 'react-helmet-async';

// Screens
import Layout from "./Layout.js";
import Landing from "./screens/Landing.js";
import Dashboard from "./screens/dashboard/Dashboard.js";
import NotFound from "./screens/NotFound.js";
import RequireAuth from "./context/RequireAuth.js";
import PersistLogin from "./context/PersistLogin.js";
import { Route, Routes } from "react-router-dom";

const ROLES = {
	'User': process.env.REACT_APP_USER_ROLE,
	'Admin': process.env.REACT_APP_ADMIN_ROLE
}

export default function App() {
	return (
		<>
		<Routes>
			<Route path="/" element={<Layout />}>

				{/* public routes */}
				<Route path="home" element={<Landing />} />
				{/* <Route path="unauthorized" element={<Unauthorized />} /> */}

				{/* we want to protect these routes */}
				<Route element={<PersistLogin />}>
					<Route element={<RequireAuth  allowedRoles={[ROLES.User]}/>}>
						<Route path="/" element={<Dashboard />} />
					</Route>
				</Route>
				
				{/* catch all */}
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
		</>
	);
}

