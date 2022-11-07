import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Header from "../../Components/Header/Header"
import UseProtectedPage from "../../Hooks/useProtectedPage"
import { allTrips } from "../../Services/Request"
import { BASE_URL } from "../../Services/Url"
import { Container, ContainerTrips } from "./Styled"

const AdminTrips = () => {
    UseProtectedPage()
    const [trips, setTrips] = useState([])


    useEffect(() => {
        allTrips(setTrips)
    }, [])

    const navigate = useNavigate()

    const goToDetail = (id) => {
        navigate(`/admin/details/${id}`)
    }


    return(
        <div>
            <Header />
            <ContainerTrips>
            {trips.trips?.map((trip) => {
                return <Container>
                    <div>
                <h2>{trip.name}</h2>
               
                </div>
                <div className="btn">
                <button onClick={() => goToDetail(trip.id)}>Detalhes</button>
                
                </div>
                </Container>
            })}
        </ContainerTrips>
        </div>
    )
}
export default AdminTrips