import IonIconTemplade from "./Ion-icons/Ion-icon"
import React from "react"

export default function QuestionTemplade({viewCard, setViewCard, index, iconQuestion}){
    return(<>
    <div className="align-center" key = {index} onClick={()=>question(viewCard, setViewCard)}>
                <div className={viewCard.styleClass}>
                    <div>
                        <p>Pergunta {index+1}</p><IonIconTemplade name={iconQuestion}/>
                    </div>
                </div>
            </div>
    </>)
}

function question(viewCard, setViewCard){
    if(viewCard.styleClass === 'flash-card'){
        const aux = {...viewCard}
        aux.type = false
        aux.frontFace = true
        setViewCard(aux)
    } else{return}
 }