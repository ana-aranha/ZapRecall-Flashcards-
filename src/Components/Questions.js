import FlashCardView from "./Flash-card";
import QuestionTemplade from "./Question-templade";
import React from "react";

export default function Questions({ flashCards, counter, setcounter }) {
	return flashCards.map((objCard, index) =>
		QuestionsTemplade(objCard, index, counter, setcounter),
	);
}

function QuestionsTemplade(el, index, counter, setcounter) {
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
					index={index}
					viewCard={viewCard}
					setViewCard={setViewCard}
					setIconQuestion={setIconQuestion}
					counter={counter}
					setcounter={setcounter}
				/>
			)}
		</>
	);
}
