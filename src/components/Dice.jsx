
import styled from "styled-components"

const Dice = ({rollDice, currentDice}) => {

    

  

  return (

    <DiceConatiner>
    <div className="dice"
    onClick={rollDice}
    >
      <img src={`/Images/Dice/dice${currentDice}.jpg`} alt="dice" height='250px' width='250px' />
     
    </div>
    <p>Click on The Dice To Roll</p>
    </DiceConatiner>
  )
}

export default Dice

const DiceConatiner = styled.div `
margin-top: 50px;
display: flex;
flex-direction: column;
align-items: center;

.dice{
    cursor: pointer;
}

p{
    font-size: 24px;
  
}

`
