import axios from "axios"
import { BASE_URL } from "./Url"

export const login = (form, goToAdmin) => {
    axios.post(`${BASE_URL}/login`, form)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        goToAdmin()

    })
    .catch((erro) => {
        console.log(erro.response)
    })
}

export const destinos = (setTrips) => {
    axios.get(`${BASE_URL}/trips`)
    .then((res) => {
        console.log(res.data.trips)
        setTrips(res.data)
    })
    .catch((erro) => {
        console.log(erro)
    })
}

export const allTrips = (setTrips) => {
    axios.get(`${BASE_URL}/trips`)
    .then((res) => {
        console.log(res.data)
        setTrips(res.data)

    })
    .catch((erro) => {
        console.log(erro)
    })
}
