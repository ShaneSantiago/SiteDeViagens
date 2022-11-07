import styled from "styled-components"

export const ContainerLogin = styled.div`
    width: 100%;

`;
export const LoginForm = styled.div`
    width: 380px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
form{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 10px;
}
input{
    margin: 10px;
    padding: 15px;
    border-radius: 20px;
    bordeR: none;
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