import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlinePlusSquare } from "react-icons/ai";

const ShopCart = ({ shopItems, addToCart }) => {
	const [count, setCount] = useState(0);
	const increment = () => {
		if (count <= 4) {
			setCount(count + 1);
		}
	};

	return (
		<>
			{shopItems.map((shopItems, index) => {
				return (
					<div className="box" key={index}>
						<div className="product mtop">
							<div className="img">
								<span className="discount">{shopItems.discount}% Off</span>
								<img src={shopItems.cover} alt="" />
								<div className="product-like">
									<label>{count}</label> <br />
									<AiOutlineHeart className="heart" onClick={increment} />
								</div>
							</div>
							<div className="product-details">
								<h3>{shopItems.name}</h3>
								<div className="rate">
									<AiFillStar />
									<AiFillStar />
									<AiFillStar />
									<AiFillStar />
									<AiFillStar />
								</div>
								<div className="price">
									<h4>${shopItems.price}.00 </h4>

									<button onClick={() => addToCart(shopItems)}>
										<AiOutlinePlusSquare />
									</button>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default ShopCart;
