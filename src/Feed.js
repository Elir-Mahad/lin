import React, { useState } from "react";
import "./Feed.css";
//
import InputOption from "./InputOption";
import Post from "./Post";
//
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import EventNoteIcon from "@material-ui/icons/EventNote";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
//

function Feed() {
	//
	const [posts, SetPosts] = useState([]);
	//
	const sendPost = (e) => {
		//
		e.preventDefault();
		//
	};
	//
	return (
		<div className="feed">
			<div className="feed_inputContainer">
				<div className="feed_input">
					<CreateIcon />
					<form>
						<input type="text" />
						<button type="submit">Send</button>
					</form>
				</div>
				<div className="feed_inputOptions">
					<InputOption
						//
						Icon={ImageIcon}
						title="photo"
						color="#70b5f9"
					/>
					<InputOption
						//
						Icon={SubscriptionsIcon}
						title="Video"
						color="#e7a33e"
					/>
					<InputOption
						//
						Icon={EventNoteIcon}
						title="Event"
						color="#c0cbcd"
					/>
					<InputOption
						//
						color="#7fc15e"
						Icon={CalendarViewDayIcon}
						title="Write article"
					/>
				</div>
				{/* posts */}
				{posts.map((post) => (
					<Post />
				))}
				{/*  */}
				<Post
					//the component post is imported and defined here
					name="mahad"
					// the prop name will have the value mahad
					description="description"
					// the prop description will have the value 'this is a test'
					message="message"
					// the prop message will have the value 'wow this worked'
				/>
			</div>
		</div>
	);
}

export default Feed;
