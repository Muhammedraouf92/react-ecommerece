import React, { Fragment } from "react";

import Sdata from "./Sdata";
import Slider from "react-slick";

const SliderCard = () => {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		appendDots: (dots) => {
			return <ul style={{ margin: "0px" }}>{dots}</ul>;
		},
	};
	return (
		<>
			<Slider {...settings}>
				{Sdata.map((value) => {
					return (
						<Fragment key={value.id}>
							<div className="box d_flex top slider-respon">
								<div className="left slider-left">
									<h1 className="text">{value.title}</h1>
									<p>{value.desc}</p>
									<button className="btn-primary">Visit Collections</button>
								</div>
								<div className="right">
									<img src={value.cover} alt="" />
								</div>
							</div>
						</Fragment>
					);
				})}
			</Slider>
		</>
	);
};

export default SliderCard;
