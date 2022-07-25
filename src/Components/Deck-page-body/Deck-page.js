import Top from "../Top-deck-page/Top-page-deck";
import Bottom from "../Bottom-deck-page/Bottom-page-deck";
import Questions from "../Flash-card/Questions";
import React from "react";
import { decks } from "./Data";

export default function Deck() {
	const flashCards = decks[1].sort(comparador);
	const [answerArr, setanswerArr] = React.useState([]);
	return (
		<>
			<Top />
			<Questions
				flashCards={flashCards}
				answerArr={answerArr}
				setanswerArr={setanswerArr}
			/>
			<Bottom flashCards={flashCards} answerArr={answerArr} />
		</>
	);
}

function comparador() {
	return Math.random() - 0.5;
}
