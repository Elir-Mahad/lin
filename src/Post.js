import React from "react";
import "./Post.css";
//
import { Avatar } from "@material-ui/core";

function Post({ name, description, message, photoUrl }) {
	return (
		<div className="post">
			<div className="post_header">
				<Avatar />
			</div>
		</div>
	);
}

export default Post;
