import styled from "styled-components"
import Numbers from "./Numbers"
import Score from "./Score"
import Dice from "./Dice"
import { useState } from "react"
import Button from "../Styles/Button"
import Rules from "./Rules"

const PlayGame = () => {

  const [score, setScore] = useState(0)
  
  const [selectedNum, setSelected] = useState();
  const [currentDice, setCurrent] =  useState(1)
  const [error, setError] = useState("")

  const [showRules, setShowRules] = useState(false)


  const generateNum = (min,max) => {
    return Math.floor(Math.random() * (max - min) + min);
 }

 const rollDice = () => {

  // ? If number is not selected it has to return a function

  if(!selectedNum) 
  {
     setError("You Have not selected any number")
    return ;
  }
  else
  {
    setError("")
  }
    const randomNumber = generateNum(1,7)
    setCurrent((prev) => randomNumber);

    
    if(selectedNum === randomNumber)
    {
    setScore((prev) => prev + randomNumber)
    }
    else
    {
      setScore((prev) => prev - 2)
    }

    // ! Below is used to unselect the number after clicking the number in the user interface 
    setSelected(undefined)
 }


const reset = () => {
  setScore(0)
}

  return (
    <MainContainer>
      <div className="top-section">
     <Score score={score}/>
     <Numbers error={error}
     setError={setError}
     selectedNum={selectedNum}
     setSelected={setSelected}/>
     </div>
     <Dice currentDice={currentDice} 
     rollDice={rollDice}/>
     <div className="btn">
      <Button 
      onClick={reset}
      className="btns">Reset</Button>
      <Button onClick={() => setShowRules((prev) => !prev)}>
        {showRules ? "Hide" : "Show "} 
       Rules</Button>
     </div>
    { showRules && <Rules/> }
    </MainContainer>
  )
}

export default PlayGame


const MainContainer = styled.main `
all: unset;
overflow: auto;
padding-top: 20px;
.top-section{
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.btn{
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  gap: 10px;
  margin-left: 0px;
  margin-right: 150px;
  padding-bottom: none;
}
.btns{
  background-color: white;
  color: black;
  
}
`