import React from "react";
import seta from "../assets/img/setinha.png";
import "./style.css";

export default function FlashCardView({
	viewCard,
	setViewCard,
	setIconQuestion,
	answerArr,
	setanswerArr,
}) {
	let deckFace = " deckFace";
	return (
		<>
			{viewCard.frontFace ? (
				<div className="align-center">
					<div className={viewCard.styleClass + deckFace}>
						<div>
							<p>{viewCard.question}</p>
						</div>
						<div>
							<p></p>
							<img
								src={seta}
								alt="arrow"
								onClick={() => open(viewCard, setViewCard)}
							/>
						</div>
					</div>
				</div>
			) : (
				<div className="align-center">
					<div className={viewCard.styleClass + deckFace}>
						<div>
							<p>{viewCard.answer}</p>
						</div>
						<div>
							<div
								className="wrong"
								onClick={() =>
									answerCard(
										"close-circle",
										" not-zap",
										setIconQuestion,
										viewCard,
										setViewCard,
										answerArr,
										setanswerArr,
									)
								}
							>
								<p>Não lembrei</p>
							</div>
							<div
								className="almost"
								onClick={() =>
									answerCard(
										"help-circle",
										" almost-zap",
										setIconQuestion,
										viewCard,
										setViewCard,
										answerArr,
										setanswerArr,
									)
								}
							>
								<p>Quase não lembrei</p>
							</div>
							<div
								className="rigth"
								onClick={() =>
									answerCard(
										"checkmark-circle",
										" zap",
										setIconQuestion,
										viewCard,
										setViewCard,
										answerArr,
										setanswerArr,
									)
								}
							>
								<p>Zap!</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

function open(viewCard, setViewCard) {
	const aux = { ...viewCard };
	aux.frontFace = false;
	setViewCard(aux);
}

function answerCard(
	icon,
	classQuestion,
	setIconQuestion,
	viewCard,
	setViewCard,
	answerArr,
	setanswerArr,
) {
	setIconQuestion(icon);
	let aux = { ...viewCard };
	aux.styleClass += classQuestion;
	aux.type = true;
	setViewCard(aux);
	let newStr = [...answerArr];
	newStr.push(icon);
	setanswerArr(newStr);
}
