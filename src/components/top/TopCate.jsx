import React from "react";
import TopCart from "./TopCart";
import { FaBorderAll } from "react-icons/fa";
import { AiFillCaretRight } from "react-icons/ai";
import "./style.css";
const TopCate = () => {
	return (
		<>
			<section className="TopCate background">
				<div className="container">
					<div className="heading d_flex">
						<div className="heading-left row  f_flex">
							<FaBorderAll className="border-icon" />
							<h2>Top Categories</h2>
						</div>
						<div className="heading-right row ">
							<span>View all</span>
							<AiFillCaretRight className="arrow-icon" />
						</div>
					</div>
					<TopCart />
				</div>
			</section>
		</>
	);
};

export default TopCate;
