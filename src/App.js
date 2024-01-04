import React from "react";
import { Helmet } from "react-helmet";
import { Route, Routes } from "react-router-dom";

// Screens
import Layout from "./Layout.js";
import Landing from "./screens/Landing.jsx";
import Dashboard from "./screens/dashboard/Dashboard.jsx";
import { NotificationsOffRounded } from "@mui/icons-material";
import NotFound from "./screens/NotFound.jsx"
import RequireAuth from "./components/RequireAuth.jsx"



export default function App() {
	return (
		<>
		<Helmet>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
			<link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
		</Helmet>
		<Routes>
			<Route path="/" element={<Layout />}>

				{/* public routes */}
				<Route path="/" element={<Landing />} />
				{/* <Route path="unauthorized" element={<Unauthorized />} /> */}

				{/* we want to protect these routes */}
				<Route element={<RequireAuth />}>
					<Route path="/" element={<Dashboard />} />
				</Route>

				{/* catch all */}
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
		</>
	);
}

