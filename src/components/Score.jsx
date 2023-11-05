import styled from "styled-components"

const Score = ({ score }) => {
  return (
    <ScoreContainer>
      
        <h1>{score}</h1>
        <p>Total Score</p>
        
      </ScoreContainer>
  )
}

export default Score

const ScoreContainer = styled.div `

  max-width: 200px;
 text-align: center;

h1{
    font-size: 100px;
    line-height: 50px;
    
}

p{
    font-size: 24px;
    font-weight: 500px;
}

`;
