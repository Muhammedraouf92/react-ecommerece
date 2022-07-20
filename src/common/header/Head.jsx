import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { AiFillRedEnvelope } from "react-icons/ai";

const Head = () => {
	return (
		<section className="head">
			<div className="container d_flex">
				<div className="left row">
					<AiFillPhone className="icon-1" />
					<span className="row-right-text">+0124 251 212</span>
					<AiFillRedEnvelope className="icon-1" />
					<span className="row-right-text">mohamed@gmail.com</span>
				</div>
				<div className="right row RText">
					<label>Theme FAQ's</label>
					<label>Need Help?</label>
					<span>🏳️‍⚧️</span>
					<label>EN</label>
					<span>🏳️‍⚧️</span>
					<label>USD</label>
				</div>
			</div>
		</section>
	);
};

export default Head;
