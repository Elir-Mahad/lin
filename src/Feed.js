import React, { useState, useEffect } from "react";
import "./Feed.css";
//
import InputOption from "./InputOption";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase";
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
	const [input, setInput] = useState("");
	//
	useEffect(
		() => {
			db.collection("posts")
				//
				.orderBy("timestamp", "desc")
				//
				.onSnapshot((snapshot) =>
					//
					SetPosts(
						//
						snapshot.docs.map((doc) => ({
							//
							id: doc.id,
							//
							data: doc.data()
							//
						}))
					)
				);
		},
		//
		[]
	);
	//
	const sendPost = (e) => {
		//
		e.preventDefault();
		//
		db.collection("posts").add({
			//
			name: "mahad",
			//
			description: "test 1",
			//
			message: input,
			//
			photoUrl: "",
			//
			timestamp: firebase.firestore.FieldValue.serverTimestamp()
			//
		});
		setInput("");
		//clear the inputfield after enter key is pressed
	};
	//
	return (
		<div className="feed">
			<div className="feed_inputContainer">
				<div className="feed_input">
					<CreateIcon />
					<form>
						<input
							//
							value={input}
							//
							onChange={(e) => setInput(e.target.value)}
							//
							type="text"
						/>
						<button
							//
							onClick={sendPost}
							type="submit"
						>
							Sending
						</button>
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
				{posts.map(({ id, data: { name, description, message, photoUrl } }) => (
					<Post
						//
						key={id}
						//
						name={name}
						//
						description={description}
						//
						message={message}
						//
						photoUrl={photoUrl}
						//
					/>
				))}
				{/*  */}
			</div>
		</div>
	);
}

export default Feed;
