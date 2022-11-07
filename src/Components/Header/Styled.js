import styled from "styled-components"

export const ContainerHeader = styled.div`
    width: 100%;
    background-color: #00BFFF;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
.container-btn{
    width: 100%;
    
}
nav ul{
    display: flex;
    justify-content: space-between;
}
li{
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    cursor: pointer;
    height: 30px;
    cursor: pointer;
    background: transparent;
    border: 1px solid #91C9FF;
    outline: none;
    transition: 1s ease-in-out;
    margin: 10px;
    color: white;
    font-size: 18px;

}
li:hover{
    transition: 1s ease-in-out;
    background: #4F95DA;
}



    
// .btn:hover{
//     transition: 1s ease-in-out;
//     background: #4F95DA;
// }
    
    
// .btn button{
//     color: white;
//     font-size: 18px;
//     font-weight: 100;
//     text-align: center;
//     margin: 10px;
// }
// button{
//     width: 100%;
//     cursor: pointer;
//     background-color: transparent;
//     border: none;
// }
`;