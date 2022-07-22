import Top from './Top-page-deck';
import Bottom from './Bottom-page-deck';
import Questions from './Questions';
import React from 'react';

export default function Deck(){
    const [flashCards,setFlashCards] = React.useState(arr.sort(comparador));
    return(
        <>
    <Top/>
    <Questions flashCards={flashCards} setFlashCards={setFlashCards}/>
    <Bottom flashCards={flashCards}/>
    </>
    )
}

function comparador() {
    return Math.random() - 0.5;
}

const arr = [
    {question:'O que é JSX?', answer:'Uma extensão de linguagem do JavaScript', type: false, styleClass: 'flash-card zap'},
    {question: 'O React é __', answer:'uma biblioteca JavaScript para construção de interfaces', type: false, styleClass: 'flash-card not-zap'} ,
    {question: 'Componentes devem iniciar com __ ', answer: 'letra maiúscula', type: false, styleClass: 'flash-card'} ,
    {question: 'Podemos colocar __ dentro do JSX ', answer: 'expressões', type: false, styleClass: 'flash-card'} , 
    {question:'O ReactDOM nos ajuda __ ', answer:'interagindo com a DOM para colocar componentes React na mesma', type: false, styleClass: 'flash-card'} ]
