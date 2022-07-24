import FlashCardView from "./Flash-card";
import QuestionTemplade from "./Question-templade";
import React from "react";

export default function Questions({ flashCards, teste, setTeste }) {
	return flashCards.map((objCard, index) =>
		QuestionsTemplade(objCard, index, teste, setTeste),
	);
}

function QuestionsTemplade(el, index, teste, setTeste) {
	const [viewCard, setViewCard] = React.useState(el);
	const [iconQuestion, setIconQuestion] = React.useState("play-outline");
	return (
		<>
			{viewCard.type ? (
				<QuestionTemplade
					index={index}
					viewCard={viewCard}
					setViewCard={setViewCard}
					iconQuestion={iconQuestion}
				/>
			) : (
				<FlashCardView
					viewCard={viewCard}
					setViewCard={setViewCard}
					setIconQuestion={setIconQuestion}
					teste={teste}
					setTeste={setTeste}
				/>
			)}
		</>
	);
}
