import React, { useEffect } from "react"
import { useNavigate } from "react-router"

const UnProtectedPage = () => {
    const navigate = useNavigate()
    const goToFeed = () => {
        navigate("/admin/trips")
    }

    useEffect(() => {
    const token = localStorage.getItem("token")
    if(token){
        goToFeed()
    }
    }, [])
}
export default UnProtectedPage