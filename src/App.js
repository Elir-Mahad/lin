import React from "react";
import "./App.css";
//
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
//
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from "./Login";

//
function App() {
	const user = useSelector(selectUser);
	//
	return (
		<div className="app">
			<Header />
			{/* if there is no user */}
			{!user ? (
				// render a login page
				<Login />
			) : (
				// otherwise render the rest of the app
				<div className="app_body">
					<Sidebar />
					<Feed />
					{/* widgets */}
				</div>
			)}
		</div>
	);
}

export default App;
