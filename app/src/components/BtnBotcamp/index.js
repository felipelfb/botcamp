import styled from "styled-components";

const BtnBotcamp = styled.button.attrs({
    children: props => props.content
})`
    background-color: #ee3e25;
    color: white;
    font-size: 20px;
    width: 280px;
    height: 50px;
    border-radius: 25px;
    text-transform: uppercase;
`;

export default BtnBotcamp;