import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("../images/background.jpg")

`;
export const Title = styled.div`
    width: 200px;
    margin: 50px;
h2{
    color: white;
    font-weight: lighter;
}
`;

export const Itens = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px; 
`;