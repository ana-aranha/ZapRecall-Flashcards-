import "./style.css";
import logotipo from "../assets/img/logo.png";

export default function Top() {
	return (
		<div className="top">
			<img src={logotipo} alt="Zap Recall logo" />
			<h1>ZapRecall</h1>
		</div>
	);
}
