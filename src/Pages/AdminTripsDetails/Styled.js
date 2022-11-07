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
    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("../../images/background.jpg");
`;

export const Container = styled.div`
    width: 500px;
    margin: 20px;
    justify-content: center;
    align-items: center;
    border-radius 20px;
    font-weight: lighter;

h2{
    font-weight: lighter;
    text-align: center;
}

p{
    margin: 10px;
}
.form{
    color: red;
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
    flex-direction: column;
    justify-content: center;
  }

.btn:hover{
    transition: 1s ease-in-out;
    background: #4F95DA;
}


.btn button{
    width: 100%;
    color: white;
    font-size: 18px;
    font-weight: 100;
    text-align: center;
    margin: 10px;
    display: flex;
    flex-direction: column;
    background-color: transparent;
    align-items: center;
    border: none;
    margin: 10px;
    cursor: pointer;
}
.candidate{
    display: flex;
    flex-direction: column;
    align-items: center;
    
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

`;
