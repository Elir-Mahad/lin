import React from "react";
import "./Sidebar.css";
//
import { Avatar } from "@material-ui/core";

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar_top">
				<img
					src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
					alt=""
				/>
				<Avatar className="sidebar_avatar" />
				<h2> Mahad </h2>
				<h4> mahad@gmail.com</h4>
			</div>
			<div className="sidebar_stats">
				<div className="sidebar_stat">
					<p> Who viewed you</p>
					<p className="sidebar_statNumber">
						{/*  */}
						2,543
					</p>
				</div>
				<div className="sidebar_stat">
					<p> Views on post</p>
					<p className="sidebar_statNumber">
						{/*  */}
						2,448
					</p>
				</div>
			</div>
			<div className="sidebar_bottom">
				<p> Recent</p>
			</div>
		</div>
	);
}

export default Sidebar;
