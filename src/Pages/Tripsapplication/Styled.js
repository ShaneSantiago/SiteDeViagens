import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("../../images/background.jpg")
`;

export const ContainerForm = styled.div`
    width: 100%; 
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

form{
    width: 380px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: 2px solid #ccc;
    border-radius: 20px;
    margin-top: 20px;
    padding: 20px;
}
form h2{
    text-align: center;
    font-weight: lighter;
    color: white;
}
input{
    width: 80%;
    border: none;
    border: 2px solid #ccc;
    margin: 10px;
    padding: 20px;
    border-radius: 20px;
}
.btn{
    width: 100%;
    height: 30px;
    cursor: pointer;
    background: transparent;
    border: 1px solid #91C9FF;
    outline: none;
    transition: 1s ease-in-out;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
  }

.btn:hover{
    transition: 1s ease-in-out;
    background: #4F95DA;
}


.btn button{
  color: white;
  font-size: 18px;
  font-weight: 100;
  text-align: center;

}
button{
    width: 100%;
    background-color: transparent;
    border: none;
    width: 100%;
    cursor: pointer;

}
`;