import './style.css'

export default function HomePage({setScreen}){
    return(
    <div className="align-center home-page">
        <img src="assets/img/logo.png" alt="Zap Recall logo"/>
        <h1>ZapRecall</h1>
        <div className="align-center start-button" onClick={()=>setScreen('Deck')}>Iniciar Recall!</div>
    </div>)
}