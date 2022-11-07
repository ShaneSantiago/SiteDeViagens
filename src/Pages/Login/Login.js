import React from "react"
import { ContainerLogin, LoginForm } from "./Styled"
import useForm from "../../Hooks/useForm"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { login } from "../../Services/Request"
import { goToTrips } from "../../Services/Navigation"

const Login = () => {
    const [form, onChange, clear] = useForm({
        email: "",
        password: ""
    })


    const navigate = useNavigate()
    const goToAdmin = () => {
        navigate("/admin/trips")
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        login(form, goToAdmin)
    }

    return(
        <ContainerLogin>
            <LoginForm>
                <form onSubmit={onSubmitForm}>
                    <input 
                    name="email"
                    type="text"
                    value={form.email}
                    onChange={onChange}
                    placeholder="Email"
                    required
                    />
                    <input 
                    name="password"
                    type="number"
                    value={form.password}
                    onChange={onChange}
                    placeholder="Senha"
                    required
                    />

                    <div className="btn">
                        <button>Entrar</button>
                    </div>
                    <div className="btn">
                        <button onClick={() => goToTrips(navigate)}>Ver Viagens</button>
                    </div>
                </form>
            </LoginForm>
        </ContainerLogin>
    )
}
export default Login