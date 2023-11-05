import styled from "styled-components";


const Button = styled.button `

 padding: 10px 10px;
 background: black;
 color: red;
 border-radius: 10px;
 width: 230px;
 font-size: 25px;
 font-weight: 500;
 font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
 border: none;
box-shadow: 5px 5px 5px 5px;
margin-left: 150px;
transition: 0.4s background ease-in-out;
cursor: pointer;

&:hover{
    background-color: aqua;
    color: black;
    transition: 0.4s background ease-in-out;
}
`;

export default Button