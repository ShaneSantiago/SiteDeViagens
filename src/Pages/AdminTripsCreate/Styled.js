import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("../images/background.jpg")
`;

export const ContainerForm = styled.div`
    width: 100%; 
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

form{
    width: 380px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: 2px solid #ccc;
    padding: 20px;
    border-radius: 20px;
    background-color: #ccc;
}
form h2{
    text-align: center;
    font-weight: lighter;
}
input{
    width: 80%;
    border: none;
    border: 2px solid #ccc;
    margin: 10px;
    padding: 20px;
    border-radius: 20px;
    border: none;
}
button{
    width: 100px;
    padding: 10px;
    border-radius: 20px;
    cursor: pointer;
    background-color: #ccc;
    border: none;
}
`;