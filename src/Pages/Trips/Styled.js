import styled from "styled-components"

export const ContainerTrips = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow-y: scroll;
    color: white;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("../images/background.jpg");
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
        background-color: transparent;
        border: none;
        width: 100%;
        cursor: pointer;
    
    }

`;