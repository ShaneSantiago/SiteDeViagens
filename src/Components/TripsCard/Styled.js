import styled from "styled-components"

export const Container = styled.div`
    width: 300px;
    height: 300px;
    margin: 20px;
    border: 2px solid #ccc;
    justify-content: center;
    align-items: center;
    border-radius 20px;
    font-weight: lighter;
div{
    height: 210px;
}
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

`;