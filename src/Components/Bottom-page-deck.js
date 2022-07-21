import IonIconTemplade from './Ion-icon'

export default function Bottom({flashCards}){
    return(
        <div className="align-center bottom">
            <div><p>0/{flashCards.length} concluídos</p></div>
            <div><IonIconTemplade name="close-circle"/><IonIconTemplade name="help-circle"/><IonIconTemplade name="checkmark-circle"/></div>
        </div>
    )
}