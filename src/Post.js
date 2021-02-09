import React from "react";
import "./Post.css";
//
import { Avatar } from "@material-ui/core";

function Post({ name, description, message, photoUrl }) {
	// the props name, description etc will be passed through this component
	return (
		<div className="post">
			<div className="post_header">
				<Avatar />
				<div className="post_info">
					<h2> {name} </h2>
					{/* the prop name is passed here */}
					<p> {description}</p>
					{/* the prop description is passed here */}
				</div>
				{/*  */}
				<div className="post_body">
					<p>{message}</p>
					{/* the prop message is passed here */}
				</div>
			</div>
		</div>
	);
}

export default Post;
