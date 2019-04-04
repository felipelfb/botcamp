import styled from "styled-components";

import background from "../../images/background.png"

const LoginWrapper = styled.main`
    background-image: url(${background});
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 120px 0px 80px 0px;
    box-sizing: border-box;
`;

export default LoginWrapper;