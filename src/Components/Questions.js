import IonIconTemplade from "./Ion-icon"
import React from "react"

export default function Questions({flashCards,setFlashCards}){
    return(flashCards.map((objCard, index) => questionTemplade(objCard, index, {setFlashCards})))
}

function questionTemplade(el, index, {setFlashCards}){
    if(el.type === false){
        return(
            <div className="align-center" key = {index} onClick={()=>question(el, setFlashCards)}>
                <div className={el.styleClass}>
                    <p>Pergunta {index+1}</p><IonIconTemplade name="play-outline"/>
                </div>
            </div>
            )
    } else{
        return(
            <div className="align-center" key = {index} onClick={()=>question(el, setFlashCards)}>
                <div className={el.styleClass}>
                    <p>{el.question}</p><IonIconTemplade name="play-outline"/>
                </div>
            </div>
            )
    }

}

function question(el, setFlashCards){
    console.log(el, setFlashCards)
    el.type = true
    /* const newEl = {...el} */
    /* setFlashCards(newEl) */
 }