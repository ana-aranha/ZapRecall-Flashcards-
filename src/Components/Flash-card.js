import React from "react";

export default function FlashCardView({
	viewCard,
	setViewCard,
	setIconQuestion,
	teste,
	setTeste,
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
								src="assets/img/setinha.png"
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
										teste,
										setTeste,
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
										teste,
										setTeste,
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
										teste,
										setTeste,
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
	teste,
	setTeste,
) {
	setIconQuestion(icon);
	let aux = { ...viewCard };
	aux.styleClass += classQuestion;
	aux.type = true;
	setViewCard(aux);
	let newStr = [...teste];
	newStr.push(icon);
	setTeste(newStr);
}
