import "./style.css";
import IonIconTemplade from "../Ion-icons/Ion-icon";
import logotipo from "../assets/img/logo.png";
import React from "react";

export default function HomePage({ setScreen, setDeckNum, deckNum }) {
	const [deckSelection, setDeckSelection] = React.useState(true);
	const [showDeck, setShowDeck] = React.useState("Nenhum");
	return (
		<>
			{deckSelection ? (
				<div className="align-center home-page">
					<img src={logotipo} alt="Zap Recall logo" />
					<h1>ZapRecall</h1>
					<div className="deck-selection">
						<p>Escolha o seu Deck</p>
						<div
							onClick={() => {
								deckOptions({ setDeckSelection });
							}}
						>
							<IonIconTemplade name="chevron-down-outline" />
						</div>
					</div>
					<div
						className="align-center start-button"
						onClick={() => alert("Selecione um Deck")}
					>
						Iniciar Recall!
					</div>
				</div>
			) : (
				<div className="align-center home-page">
					<img src={logotipo} alt="Zap Recall logo" />
					<h1>ZapRecall</h1>
					<div className="deck-selection decks">
						<div
							onClick={() => {
								setDeckNum(0);
								setShowDeck("React Deck");
							}}
						>
							<p>React Deck</p>
						</div>
						<div
							onClick={() => {
								setDeckNum(1);
								setShowDeck("Kanji Deck");
							}}
						>
							<p>Kanji Deck</p>
						</div>
					</div>
					<div
						className="align-center start-button"
						onClick={() => {
							if (deckNum === "Nenhum") {
								alert("Selecione um deck");
							} else {
								setScreen("Deck");
							}
						}}
					>
						Iniciar Recall!
					</div>
					<div className="selecionado">Deck selecionado: {showDeck}</div>
				</div>
			)}
		</>
	);
}

function deckOptions({ setDeckSelection }) {
	setDeckSelection(false);
}
