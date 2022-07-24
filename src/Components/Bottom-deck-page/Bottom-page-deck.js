import IonIconTemplade from "../Ion-icons/Ion-icon";
import "./style.css";

export default function Bottom({ flashCards, teste }) {
	return (
		<div className="align-center bottom">
			<Message teste={teste} flashCards={flashCards} />
			<div>
				<p>
					{teste.length}/{flashCards.length} CONCLUÍDOS
				</p>
			</div>
			<div>
				{teste.map((icon, index) => (
					<IonIconTemplade name={icon} key={index} />
				))}
			</div>
		</div>
	);
}

function Message({ teste, flashCards }) {
	console.log(teste.includes("close-circle"));
	return (
		<>
			{teste.length === flashCards.length ? (
				<ResultMessage teste={teste} />
			) : (
				<></>
			)}
		</>
	);
}

function ResultMessage({ teste }) {
	return (
		<>
			{teste.includes("close-circle") ? (
				<>
					<div>
						<img src="assets/img/sad.png" alt="sad emoji" />
						<span>Putz...</span>
					</div>
					<div>Ainda faltam alguns... Mas não desanime! </div>
				</>
			) : (
				<>
					<div>
						<img src="assets/img/party.png" alt="party emoji" />
						<span>Parabéns!!</span>
					</div>
					<div>Você não esqueceu nenhum flashCard!</div>
				</>
			)}
		</>
	);
}
