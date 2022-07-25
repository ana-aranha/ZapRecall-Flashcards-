import React from "react";
import HomePage from "./Home-page/Home-page";
import Deck from "./Deck-page-body/Deck-page";
import "./assets/CSS/reset.css";
import "./assets/CSS/style.css";

export default function App() {
	const [screen, setScreen] = React.useState("home");

	return (
		<>
			{screen === "home" ? (
				<HomePage screen={screen} setScreen={setScreen} />
			) : (
				<Deck />
			)}
		</>
	);
}
