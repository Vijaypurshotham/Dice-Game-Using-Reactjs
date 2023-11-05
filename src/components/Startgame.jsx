import styled from 'styled-components'
import Button from '../Styles/Button';

const Startgame = ({toggle}) => {
  return (
    <Container>
        <div>
      <img src='/Images/DICE.jpg' alt='Dice Image' height='450px' width='600px'/>
      </div>
      <div className>
        <Header>Dice Game</Header>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default Startgame

const Container = styled.div `

max-width: 1180px;
height: 100vh;
display: flex;
margin: 0 auto;
align-items: center;

`;

const Header = styled.h1 `
margin-left: 105px;
font-size: 96px;
white-space: nowrap;

`;


