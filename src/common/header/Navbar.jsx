import React from "react";
import { Link } from "react-router-dom";
import { FaBorderAll } from "react-icons/fa";
import { AiFillCloseSquare } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
const Navbar = () => {
	const [MobileMenu, setMobileMenu] = useState(false);
	return (
		<header className="header">
			<div className="container d_flex">
				<div className="catgrories d_flex">
					<h4>
						Categories <FaBorderAll />
					</h4>
				</div>
				<div className="navlink">
					<ul
						className={
							MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
						}
						onClick={() => setMobileMenu(false)}
					>
						<li>
							<Link to="/">home</Link>
						</li>
						<li>
							<Link to="/pages">pages</Link>
						</li>
						<li>
							<Link to="/user">user account</Link>
						</li>
						<li>
							<Link to="/vendor">vendor account</Link>
						</li>
						<li>
							<Link to="/track">track my order</Link>
						</li>
						<li>
							<Link to="/contact">contact</Link>
						</li>
					</ul>
					<button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
						{MobileMenu ? (
							<AiFillCloseSquare className="close home-btn" />
						) : (
							<FaBars className="open" />
						)}
					</button>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
