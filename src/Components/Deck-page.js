import IonIconTemplade from './Ion-icon'

export default function Deck(){
    console.log(flashCards.length)
    return(
    <>
    <Topo/>
    <Questions/>
    <Bottom flashCards={flashCards}/>
    </>
    )
}


const flashCards = [{question:'O que é JSX?', answer:'Uma extensão de linguagem do JavaScript'},{question: 'O React é __', answer:'uma biblioteca JavaScript para construção de interfaces'},{question: 'Componentes devem iniciar com __ ', answer: 'letra maiúscula'},{question: 'Podemos colocar __ dentro do JSX ', answer: 'expressões'}, {question:'O ReactDOM nos ajuda __ ', answer:'interagindo com a DOM para colocar componentes React na mesma'}]

function question(el, index){
    console.log(el, index)
    return(
        <>
            <div className="align-center">
            <div className="flash-card">
                <p>Pergunta {index+1}</p><IonIconTemplade name="play-outline"/>
            </div>
            </div>
        </>)
}

function Topo(){
    return(<div className="top">
    <img src="assets/img/logo.png" alt="Zap Recall logo"/>
    <h1>ZapRecall</h1>
    </div>)
}

function Bottom({flashCards}){
    return(
        <div className="align-center bottom">
            <div><p>0/{flashCards.length} concluídos</p></div>
            <div><IonIconTemplade name="close-circle"/><IonIconTemplade name="help-circle"/><IonIconTemplade name="checkmark-circle"/></div>
        </div>
    )
}

function Questions(){
    return(flashCards.map((objCard, index) => {return(question(objCard, index))}))
}