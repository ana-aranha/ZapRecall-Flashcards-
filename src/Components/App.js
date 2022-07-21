import React from "react"
import HomePage from "./Home-page"
import Deck from "./Deck-page"

export default function App(){
    const[screen,setScreen] = React.useState('home')
    console.log(screen)

    return (
        <>
        {screen === 'home'? <HomePage screen={screen} setScreen={setScreen}/> : <Deck/>}
        </>
        )
}