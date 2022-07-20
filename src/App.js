import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import Data from "./components/Data";
import Cart from "./common/cart/Cart";
import Footer from "./common/footer/Footer";
import Sdata from "./components/shop/Sdata";

function App() {
	const { productItems } = Data;
	const { shopItems } = Sdata;

	const [CartItem, setCartItem] = useState([]);

	const addToCart = (product) => {
		const productExit = CartItem.find((item) => item.id === product.id);

		if (productExit) {
			setCartItem(
				CartItem.map((item) =>
					item.id === product.id
						? { ...productExit, qty: productExit.qty + 1 }
						: item
				)
			);
		} else {
			setCartItem([...CartItem, { ...product, qty: 1 }]);
		}
	};

	const decreaseQty = (product) => {
		const productExit = CartItem.find((item) => item.id === product.id);

		if (productExit.qty === 1) {
			setCartItem(CartItem.filter((item) => item.id !== product.id));
		} else {
			setCartItem(
				CartItem.map((item) =>
					item.id === product.id
						? { ...productExit, qty: productExit.qty - 1 }
						: item
				)
			);
		}
	};
	const removeQty = (product) => {
		setCartItem(CartItem.filter((item) => item.id !== product.id));
	};

	return (
		<div className="App">
			<Router>
				<Header CartItem={CartItem} />
				<Routes>
					<Route
						path="/"
						element={
							<Pages
								productItems={productItems}
								addToCart={addToCart}
								shopItems={shopItems}
							/>
						}
					/>
					<Route
						path="/cart"
						element={
							<Cart
								CartItem={CartItem}
								addToCart={addToCart}
								decreaseQty={decreaseQty}
								removeQty={removeQty}
							/>
						}
					/>
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
