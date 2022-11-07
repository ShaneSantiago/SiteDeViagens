import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import useRequestData from "../../Hooks/useRequestData"
import { Container } from "./Styled"

const TripsCard = (props) => {
    const navigate = useNavigate()

    const goToSubscribe = (id) => {
        navigate(`/trips/application/${id}`)
    }

    return(
        <Container>
            <div>
            <h2>{props.trip.name}</h2>
            <p>Descrição: {props.trip.description}</p>
            <p>Planeta: {props.trip.planet}</p>
            <p>Data: {props.trip.date}</p>
            <p>Duração da viagem: {props.trip.durationInDays} dia</p>
            </div>
            <div className="btn">
            <button onClick={() => goToSubscribe(props.trip.id)}>Inscrição</button>
            </div>
        </Container>
    )
}
export default TripsCard