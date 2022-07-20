import React from "react";
import Annocument from "../components/announcment/Announcment";
import Wrapper from "../components/announcment/wrapper/wrapper";
import Discount from "../components/discount/Discount";
import FlashDeals from "../components/flashDeals/FlashDeals";
import Home from "../components/mainpage/Home";
import NewArrivals from "../components/newarrivals/NewArrivals";
import Shop from "../components/shop/Shop";
import TopCate from "../components/top/TopCate";
const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
	return (
		<>
			<Home CartItem={CartItem} />
			<FlashDeals productItems={productItems} addToCart={addToCart} />
			<TopCate />
			<NewArrivals />
			<Discount />
			<Shop shopItems={shopItems} addToCart={addToCart} />
			<Annocument />
			<Wrapper />
		</>
	);
};

export default Pages;
