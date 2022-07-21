import IonIconTemplade from "./Ion-icon"

export default function Questions({flashCards}){
    return(flashCards.map((objCard, index) => questionTemplade(objCard, index)))
}

function questionTemplade(el, index){
    return(
        <div className="align-center" key = {index} onClick={()=>Question(el)}>
            <div className="flash-card">
                <p>Pergunta {index+1}</p><IonIconTemplade name="play-outline"/>
            </div>
        </div>
        )
}

function Question(el){
    console.table(el.question, el.answer)
/* return(
    <div>{el.question}</div>
) */
}