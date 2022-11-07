import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { goToCreate, goToHome, goToTrips } from "../../Services/Navigation"
import { ContainerHeader } from "./Styled"

const Header = () => {

    const navigate = useNavigate()

    const goToLogin = () => {
        navigate("/")
    }

    const logout = (token) => {
        if(token){
            localStorage.removeItem("token")
        }
        goToLogin()
    }



    return(
        <ContainerHeader>
            <div className="container-btn">
            <nav>
                <ul>
                    <li onClick={() => goToHome(navigate)}>Home</li>
                    <li onClick={() => goToTrips(navigate)}>Ver Viagens</li>
                    <li onClick={() => goToCreate(navigate)}>Criar Viagens</li>
                    <li onClick={logout}>Logout</li>
                </ul>
            </nav>
            </div>
            
        </ContainerHeader>
    )
}
export default Header