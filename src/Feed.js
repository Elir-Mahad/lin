import React from "react";
import "./Feed.css";
//
import InputOption from "./InputOption";
//
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import EventNoteIcon from "@material-ui/icons/EventNote";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
//

function Feed() {
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
				{/*  */}
			</div>
		</div>
	);
}

export default Feed;
