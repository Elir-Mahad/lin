import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@material-ui/core";

function HeaderOption({ avatar, Icon, title }) {
	return (
		<div className="headerOption">
			{Icon && <Icon className="heeaderOption_icon" />}
			{/* if an icon is passed in, then and only then render the icon  */}
			{avatar && (
				<Avatar
					//
					className="headerOption_icon"
					src={avatar}
				/>
			)}
			<h3 className="headerOption_title"> {title} </h3>
		</div>
	);
}

export default HeaderOption;
