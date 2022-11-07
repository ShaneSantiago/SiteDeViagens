import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import UseProtectedPage from "../../Hooks/useProtectedPage"
import Candidates from "./Candidates"
import { Container, ContainerTrips } from "./Styled"
import { BASE_URL } from "../../Services/Url"
import Header from "../../Components/Header/Header"
import ModalComponent from "../../Components/Modal/Modal"


const AdminTripsDetails = () => {
    UseProtectedPage()
    const [details, setDetails] = useState([])

    const params = useParams()

    useEffect(() => {
        allDetails()
    }, [])

    const allDetails = () => {
        axios.get(`${BASE_URL}/trip/${params.id}`, {
            headers: { auth: localStorage.getItem("token") }
        })
        .then((res) => {
            console.log(res.data)
            setDetails(res.data.trip)
        })
        .catch((erro) => {
            console.log(erro.response.data)
        })
    }

    const decideCandidate = (approve, candidateId) =>{
        const body = {  
            approve: approve      
        }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/leticia-chijo/trips/${params.id}/candidates/${candidateId}/decide`, body,{
          headers: {
            auth: localStorage.getItem('token')
          }
        })
        .then((res) =>{
          allDetails()
        })
        .catch((erro)=>{
          console.log(erro.response.data)
        })
        }

        const onClickDelete = () => {
            deleteTrip()
        }
    
        const deleteTrip = (id) => {
            axios.delete(`${BASE_URL}/trips/${params.id}`, {
                headers: {
                  auth: localStorage.getItem('token')
                }
              })
            .then((res) => {
                console.log("Viagem deletada com sucesso")
            })
            .catch((erro) => {
                console.log(erro)
            })
        }

        
    return(
        <ContainerTrips>
        <Header />
            <Container>
            <div className="container">
            <p>Nome: {details.name}</p>
            <p>Planeta: {details.planet}</p>
            <p>Descrição: {details.description}</p>
            <p>Tempo da viagem em dias: {details.durationInDays}</p>
            <p>Data: {details.date}</p>
            <div className="btn">
            <ModalComponent details={details}/>
            </div>
            <div className="btn">
            <button onClick={onClickDelete}>Deletar Viagem</button>
            </div>
            </div>
            {details.candidates && details.candidates.length > 0 ? details.candidates.map((candidate) => {
                return <div className="candidate">
                 <Candidates candidate={candidate} decideCandidate={decideCandidate}/>
                </div>
            }) : <p>Nenhum candidato nessa viagem</p>}
            </Container>
            
        </ContainerTrips>
    )
}
export default AdminTripsDetails