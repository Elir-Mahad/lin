import React from "react";
import "./Header.css";
//
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
//
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
				<HeaderOption Icon={HomeIcon} title="Home" />
				<HeaderOption Icon={SupervisorAccountIcon} title="My network" />
				<HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
				<HeaderOption Icon={ChatIcon} title="Messaging" />
				<HeaderOption Icon={NotificationsIcon} title="Notifications" />
				<HeaderOption avatar="https://lh5.googleusercontent.com/-1CIp2TvQxXY/VBoJ_l8EUwI/AAAAAAAABg4/0VEuW-tXJE8/s640/blogger-image--586450017.jpg" />
			</div>
		</div>
	);
}

export default Header;
