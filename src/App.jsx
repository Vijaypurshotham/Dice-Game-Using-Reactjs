import { useState } from "react"
import Startgame from "./components/Startgame"
import PlayGame from "./components/PlayGame"


const App = () => {

  const [isgameStarted, setGameStarted] = useState(false)
 
 const GamePlay = () => {
  setGameStarted((prev)  => !prev);
 }
 
  return (
    <>
   {isgameStarted ? <PlayGame/> : <Startgame
   
   toggle={GamePlay}/>}
 
    </>
  )
}

export default App

