
import styled from "styled-components"

const Numbers = ({ setError, error, selectedNum, setSelected}) => {

    const arrays = [1,2,3,4,5,6];

 const numberSelector = (value) => {
  setSelected(value)
  setError("")
 }
  
  return (
    <NumbersContainer>
      <p className="error">{error}</p>
    <div className="flex">
    {arrays.map((value,index) => (
        <Box 
        // ? Below "isSelected" is a property name
        isSelected={value === selectedNum}
        key={index}
        onClick={() => numberSelector(value)}
        >{value}</Box>
    ))} 
    </div>
    <p>Select a Number</p>
    </NumbersContainer>
  )
}

export default Numbers

const NumbersContainer = styled.div `

display: flex;
flex-direction: column;
align-items: center;


.flex {
    display: flex;
    gap: 25px;
}

p{
    font-size: 25px;
    font-weight: 700;

}

.error{
  color: red;
}
`;


const Box = styled.div `
height: 72px;
width: 72px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 700;
background-color: ${(props) => (props.isSelected ? "black" : "white") };
color: ${(props) => (!props.isSelected ? "black" : "white" )};
cursor: pointer;
`