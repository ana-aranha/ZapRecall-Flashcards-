import React from "react";

export default function FlashCardView({viewCard,index, setViewCard, setIconQuestion, counter, setcounter}){
    let deckFace= ' deckFace'
    return(<>{
        viewCard.frontFace? <div className="align-center" key = {index}>
        <div className={viewCard.styleClass+deckFace}>
            <div><p>{viewCard.question}</p></div>
            <div><p></p><img src="assets/img/setinha.png" alt='arrow' onClick={()=>open(viewCard,setViewCard)}/></div>
        </div>
        </div>:
        <div className="align-center" key = {index}>
        <div className={viewCard.styleClass+deckFace}>
            <div><p>{viewCard.answer}</p></div>
            <div>
                <div className='wrong' onClick={()=>answerCard('close-circle', ' not-zap', setIconQuestion, viewCard, setViewCard, counter, setcounter)}><p>Não lembrei</p></div>
                <div className="almost" onClick={()=>answerCard('help-circle', ' almost-zap', setIconQuestion, viewCard, setViewCard, counter, setcounter)}><p>Quase não lembrei</p></div>
                <div className="rigth" onClick={()=>answerCard('checkmark-circle', ' zap', setIconQuestion, viewCard, setViewCard, counter, setcounter)}><p>Zap!</p></div>
            </div>
        </div>
        </div>
    }</>)
}

function open(viewCard, setViewCard){
    const aux = {...viewCard}
    aux.frontFace = false
    setViewCard(aux)
}

function answerCard(icon, classQuestion, setIconQuestion, viewCard, setViewCard, counter, setcounter){
    setIconQuestion(icon)
    let aux = {...viewCard}
    aux.styleClass+=classQuestion
    aux.type = true
    setViewCard(aux)
    let newCounter = counter + 1
    setcounter(newCounter)
}