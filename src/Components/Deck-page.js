import Top from './Top-page-deck';
import Bottom from './Bottom-page-deck';
import Questions from './Questions';

export default function Deck(){
    console.log(flashCards.length)
    return(
        <>
    <Top/>
    <Questions flashCards={flashCards}/>
    <Bottom flashCards={flashCards}/>
    </>
    )
}

function comparador() {
    return Math.random() - 0.5;
}

const arr = [{question:'O que é JSX?', answer:'Uma extensão de linguagem do JavaScript'},{question: 'O React é __', answer:'uma biblioteca JavaScript para construção de interfaces'},{question: 'Componentes devem iniciar com __ ', answer: 'letra maiúscula'},{question: 'Podemos colocar __ dentro do JSX ', answer: 'expressões'}, {question:'O ReactDOM nos ajuda __ ', answer:'interagindo com a DOM para colocar componentes React na mesma'}]

const flashCards = arr.sort(comparador);