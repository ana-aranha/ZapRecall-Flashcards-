import IonIconTemplade from "../Ion-icons/Ion-icon";
import "./style.css";

export default function Bottom({ flashCards, counter }) {
	return (
		<div className="align-center bottom">
			<div>
				<p>
					{counter}/{flashCards.length} concluídos
				</p>
			</div>
			<div>
				<IonIconTemplade name="close-circle" />
				<IonIconTemplade name="help-circle" />
				<IonIconTemplade name="checkmark-circle" />
			</div>
		</div>
	);
}
