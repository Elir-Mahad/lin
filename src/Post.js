import React from "react";
import "./Post.css";
//
import InputOption from "./InputOption";
//
import { Avatar } from "@material-ui/core";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

//

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
			</div>
			{/*  */}
			<div className="post_body">
				<p>{message}</p>
				{/* the prop message is passed here */}
			</div>
			<div className="post_buttons">
				<InputOption
					//
					Icon={ThumbUpAltOutlinedIcon}
					title="like"
					color="gray"
				/>
				<InputOption
					//
					Icon={ChatOutlinedIcon}
					title="like"
					color="gray"
				/>
				<InputOption
					//
					Icon={ShareOutlinedIcon}
					title="like"
					color="gray"
				/>
				<InputOption
					//
					Icon={SendOutlinedIcon}
					title="like"
					color="gray"
				/>
			</div>
		</div>
	);
}

export default Post;
