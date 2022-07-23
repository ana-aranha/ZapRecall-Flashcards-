import Top from "./Top-deck-page/Top-page-deck";
import Bottom from "./Bottom-deck-page/Bottom-page-deck";
import Questions from "./Questions";
import React from "react";

export default function Deck() {
	const flashCards = arr.sort(comparador);
	const [counter, setcounter] = React.useState(0);
	return (
		<>
			<Top />
			<Questions
				flashCards={flashCards}
				counter={counter}
				setcounter={setcounter}
			/>
			<Bottom
				flashCards={flashCards}
				counter={counter}
				setcounter={setcounter}
			/>
		</>
	);
}

function comparador() {
	return Math.random() - 0.5;
}

const arr = [
	{
		question: "O que é JSX?",
		answer: "Uma extensão de linguagem do JavaScript",
		type: true,
		styleClass: "flash-card",
	},
	{
		question: "O React é __",
		answer: "uma biblioteca JavaScript para construção de interfaces",
		type: true,
		styleClass: "flash-card",
	},
	{
		question: "Componentes devem iniciar com __ ",
		answer: "letra maiúscula",
		type: true,
		styleClass: "flash-card",
	},
	{
		question: "Podemos colocar __ dentro do JSX ",
		answer: "expressões",
		type: true,
		styleClass: "flash-card",
	},
	{
		question: "O ReactDOM nos ajuda __ ",
		answer: "interagindo com a DOM para colocar componentes React na mesma",
		type: true,
		styleClass: "flash-card",
	},
	{
		question: "Usamos o npm para __ ",
		answer: "gerenciar os pacotes necessários e suas dependências",
		type: true,
		styleClass: "flash-card",
	},
	{
		question: "Usamos props para __ ",
		answer: "passar diferentes informações para componentes",
		type: true,
		styleClass: "flash-card",
	},
	{
		question: "Usamos estado (state) para __ ",
		answer:
			"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
		type: true,
		styleClass: "flash-card",
	},
];
