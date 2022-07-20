import React from "react";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

const Search = ({ CartItem }) => {
	window.addEventListener("scroll", function () {
		const search = document.querySelector(".search");
		search.classList.toggle("active", window.scrollY > 100);
	});
	return (
		<section className="search">
			<div className="container c_flex">
				<div className="logo width ">
					<img src={logo} alt="" />
				</div>

				<div className="search-box f_flex">
					<BsSearch className="icon" />
					<input type="text" placeholder="Search and hit enter..." />
					<span>All Category</span>
				</div>

				<div className="f_flex width">
					<div className=" icon-circle">
						<FaUserAlt className="icon-2" />
					</div>
					<Link to="/cart">
						<div className="cart icon-circle">
							<FaShoppingCart className=" icon-2" />
							<span>{CartItem.length === 0 ? "0" : CartItem.length}</span>
						</div>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Search;
