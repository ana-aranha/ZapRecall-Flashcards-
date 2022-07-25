import "./style.css";
import logotipo from "../assets/img/logo.png";

export default function HomePage({ setScreen }) {
	return (
		<div className="align-center home-page">
			<img src={logotipo} alt="Zap Recall logo" />
			<h1>ZapRecall</h1>
			<div
				className="align-center start-button"
				onClick={() => setScreen("Deck")}
			>
				Iniciar Recall!
			</div>
		</div>
	);
}
