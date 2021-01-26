import React from "react";
import "./Header.css";
//
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";

function Header() {
	return (
		<div className="header">
			<div className="header_left">
				<img
					src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
					alt=""
				/>

				<div className="header_search">
					<SearchIcon />
					<input type="text" />
				</div>
			</div>
			<div className="header_right">
				<HeaderOption title="home" />
				<HeaderOption title="My network" />
			</div>
		</div>
	);
}

export default Header;
