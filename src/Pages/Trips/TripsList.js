import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import TripsCard from "../../Components/TripsCard/TripsCard"
import { destinos } from "../../Services/Request"
import { ContainerTrips } from "./Styled"

const TripList = () => {
const [trips, setTrips] = useState([])

useEffect(() => {
    destinos(setTrips)
}, [])

const navigate = useNavigate()

const goToHome = () => {
    navigate("/")
}


    return(
        <div>
        <ContainerTrips>
        <div className="btn">
        <button onClick={goToHome}>Voltar</button>
        </div>
            {trips.trips?.map((trip) => {
                return <TripsCard trip={trip}/>
            })}
        </ContainerTrips>
        </div>
    )
}
export default TripList