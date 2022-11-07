import React, { useEffect } from "react"
import { useNavigate } from "react-router"

const UseProtectedPage = () => {
    const navigate = useNavigate()
    const goToLogin = () => {
        navigate("/")
    }

    useEffect(() => {
    const token = localStorage.getItem("token")
    if(!token){
        goToLogin()
    }
    }, [])
}
export default UseProtectedPage