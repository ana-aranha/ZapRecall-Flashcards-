import FlashCardView from "./Flash-card";
import QuestionTemplade from "./Question-templade";
import React from "react";

export default function Questions({ flashCards, answerArr, setanswerArr }) {
	return flashCards.map((objCard, index) => (
		<QuestionsTemplade
			key={"questiontemplade" + index}
			objCard={objCard}
			index={index}
			answerArr={answerArr}
			setanswerArr={setanswerArr}
			el={objCard}
		/>
	));
}

function QuestionsTemplade({ el, index, answerArr, setanswerArr }) {
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
					answerArr={answerArr}
					setanswerArr={setanswerArr}
				/>
			)}
		</>
	);
}
