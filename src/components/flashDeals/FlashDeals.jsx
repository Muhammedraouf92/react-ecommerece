import React from "react";
import FlashCard from "./FlashCard";
import "./style.css";

import { AiFillThunderbolt } from "react-icons/ai";

const FlashDeals = ({ productItems, addToCart }) => {
	return (
		<>
			<section className="flash">
				<div className="container">
					<div className="heading f_flex">
						<AiFillThunderbolt className="iconflash" />
						<h1>Flash Deals</h1>
					</div>
					<div className="flash-deal-respon">
						<FlashCard productItems={productItems} addToCart={addToCart} />
					</div>
				</div>
			</section>
		</>
	);
};

export default FlashDeals;
