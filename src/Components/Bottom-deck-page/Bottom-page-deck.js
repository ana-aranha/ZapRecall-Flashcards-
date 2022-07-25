import IonIconTemplade from "../Ion-icons/Ion-icon";
import "./style.css";
import sad from "../assets/img/sad.png";
import party from "../assets/img/party.png";

export default function Bottom({ flashCards, answerArr }) {
	return (
		<div className="align-center bottom">
			<Message answerArr={answerArr} flashCards={flashCards} />
			<div>
				<p>
					{answerArr.length}/{flashCards.length} CONCLUÍDOS
				</p>
			</div>
			<div>
				{answerArr.map((icon, index) => (
					<IonIconTemplade name={icon} key={index} />
				))}
			</div>
		</div>
	);
}

function Message({ answerArr, flashCards }) {
	return (
		<>
			{answerArr.length === flashCards.length ? (
				<ResultMessage answerArr={answerArr} />
			) : (
				<></>
			)}
		</>
	);
}

function ResultMessage({ answerArr }) {
	return (
		<>
			{answerArr.includes("close-circle") ? (
				<>
					<div>
						<img src={sad} alt="sad emoji" />
						<span>Putz...</span>
					</div>
					<div>Ainda faltam alguns... Mas não desanime! </div>
				</>
			) : (
				<>
					<div>
						<img src={party} alt="party emoji" />
						<span>Parabéns!!</span>
					</div>
					<div>Você não esqueceu nenhum flashCard!</div>
				</>
			)}
		</>
	);
}
