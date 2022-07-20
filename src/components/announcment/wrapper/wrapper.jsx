import React from "react";
import "./style.css";
import { FaShippingFast } from "react-icons/fa";
import { BsFillSafeFill } from "react-icons/bs";
import { BsHexagonHalf } from "react-icons/bs";
import { BsHeadset } from "react-icons/bs";

const Wrapper = () => {
	const data = [
		{
			cover: <FaShippingFast />,
			title: "Worldwide Delivery",
			decs: "We offer competitive prices on our 100 million plus product any range.",
		},
		{
			cover: <BsFillSafeFill />,
			title: "Safe Payment",
			decs: "We offer competitive prices on our 100 million plus product any range.",
		},
		{
			cover: <BsHexagonHalf />,
			title: "Shop With Confidence ",
			decs: "We offer competitive prices on our 100 million plus product any range.",
		},
		{
			cover: <BsHeadset />,
			title: "24/7 Support ",
			decs: "We offer competitive prices on our 100 million plus product any range.",
		},
	];
	return (
		<>
			<section className="wrapper background">
				<div className="container grid2">
					{data.map((val, index) => {
						return (
							<div className="product" key={index}>
								<div className="img icon-circle ico">{val.cover}</div>
								<h3>{val.title}</h3>
								<p>{val.decs}</p>
							</div>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default Wrapper;
