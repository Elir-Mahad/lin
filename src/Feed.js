import React from "react";
import "./Feed.css";
//
import InputOption from "./InputOption";
//
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
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
					/>
				</div>
			</div>
		</div>
	);
}

export default Feed;
