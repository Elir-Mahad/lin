import React from "react";
import "./HeaderOption.css";

function HeaderOption({ Icon, title }) {
	return (
		<div className="headerOption">
			{Icon && <Icon className="heeaderOption_icon" />}
			{/* if an icon is passed in, then and only then render the icon  */}
			<h3 className="headerOption_title"> {title} </h3>
		</div>
	);
}

export default HeaderOption;
