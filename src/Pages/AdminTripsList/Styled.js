import styled from "styled-components"

export const ContainerTrips = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    flex-direction: column;
    color: white;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("../images/background.jpg");

`;

export const Container = styled.div`
    width: 28%;
    height: 120px;
    margin: 20px;
    border: 2px solid #ccc;
    justify-content: center;
    align-items: center;
    font-weight: lighter;

div h2{
    font-weight: lighter;
    text-align: center;
}
p{
    margin: 10px;
}
.btn{
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
    cursor: pointer;
    background-color: transparent;
    border: none;
}
@media (max-width: 680px){
    width: 60%;
}

`;