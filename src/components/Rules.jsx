import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      
        <h2>How to Play Dice Game</h2>
      
      <div className="text">
        <p>Select Any Number</p>
        <p>Click on The Dice Image</p>
        <p>
          After Clicking on Dice If Selected Number is Equal to Dice Number You
          Will Get Same Point As Dice
        </p>
        <p>If You Get Wrong Guess Then 2 Point Will Be Deducted</p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div `

max-width: 800px;
margin: 0 auto;
background-color: lightskyblue;
padding: 24px;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 25px;
border-radius: 10px;

h2{
    font-size: 24px;
    
}
 .text{
    margin-top: 20px;

 }
`;
