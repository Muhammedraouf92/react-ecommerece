import React, { useState } from "react";
import Slider from "react-slick";
import { AiFillStar } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlinePlusSquare } from "react-icons/ai";

const SampleNextArrow = (props) => {
	const { onClick } = props;
	return (
		<div className="control-btn" onClick={onClick}>
			<button className="next">
				<BsArrowRight className="loca" />
			</button>
		</div>
	);
};
const SamplePrevArrow = (props) => {
	const { onClick } = props;
	return (
		<div className="control-btn" onClick={onClick}>
			<button className="prev">
				<BsArrowLeft className="loca" />
			</button>
		</div>
	);
};
const FlashCard = ({ productItems, addToCart }) => {
	const [count, setCount] = useState(0);

	const increment = () => {
		if (count <= 4) {
			setCount(count + 1);
		}
	};
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};
	return (
		<>
			<Slider {...settings}>
				{productItems.map((productItems, index) => {
					return (
						<div className="box" key={index}>
							<div className="product mtop ">
								<div className="img">
									<span className="discount">{productItems.discount}% Off</span>
									<img src={productItems.cover} alt="" />
									<div className="product-like">
										<label>{count}</label> <br />
										<AiOutlineHeart className="heart" onClick={increment} />
									</div>
								</div>
								<div className="product-details">
									<h3>{productItems.name}</h3>
									<div className="rate">
										<AiFillStar />
										<AiFillStar />
										<AiFillStar />
										<AiFillStar />
										<AiFillStar />
									</div>
									<div className="price">
										<h4>${productItems.price}.00 </h4>

										<button onClick={() => addToCart(productItems)}>
											<AiOutlinePlusSquare />
										</button>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</Slider>
		</>
	);
};

export default FlashCard;
