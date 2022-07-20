import React from "react";
import "./header.css";
import Head from "./Head";
import Navbar from "./Navbar";
import Search from "./Search";
const Header = ({ CartItem }) => {
	return (
		<div>
			<Head />
			<Navbar />
			<Search CartItem={CartItem} />
		</div>
	);
};

export default Header;
