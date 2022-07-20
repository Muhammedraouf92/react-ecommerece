import React, { Fragment } from "react";
import Slider from "react-slick";

import Ddata from "./Ddata";
import "../newarrivals/style.css";

const Dcard = () => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
	};
	return (
		<>
			<Slider {...settings}>
				{Ddata.map((value, index) => {
					return (
						<Fragment key={index}>
							<div className="box product">
								<div className="img">
									<img src={value.cover} alt="" width="100%" />
								</div>
								<h4>{value.name}</h4>
								<span>{value.price}</span>
							</div>
						</Fragment>
					);
				})}
			</Slider>
		</>
	);
};

export default Dcard;
