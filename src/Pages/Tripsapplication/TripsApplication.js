import axios from "axios"
import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import useForm from "../../Hooks/useForm"
import { goToHome } from "../../Services/Navigation"
import { BASE_URL } from "../../Services/Url"
import { Container, ContainerForm } from "./Styled"

const TripsApplication = () => {

    const params = useParams()

    const [form, onChange, clear] = useForm({
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: ""
    })
    const navigate = useNavigate()

    const onSubmitForm = (e) => {
        e.preventDefault()
        inscricao()
    }

    const inscricao = (id) => {
        axios.post(`${BASE_URL}/trips/${params.id}/apply`, form)
        .then((res) => {
            alert("Incrição realizada com sucesso")
            clear()
        })
        .catch((erro) => {
            alert("Ocorreu algum erro, tente novamente")
        })
    }
    return(
        <Container>
        <ContainerForm>
            <div>
            <form onSubmit={onSubmitForm}>
                <h2>Faça sua inscrição para viagem</h2>
                <input 
                name="name"
                type="text"
                value={form.name}
                onChange={onChange}
                placeholder="Nome"
                required
                />
                <input 
                name="age"
                type="number"
                value={form.age}
                onChange={onChange}
                placeholder="Idade"
                required
                />
                <input 
                name="applicationText"
                type="text"
                value={form.applicationText}
                onChange={onChange}
                placeholder="Escreva o motivo de querer ir nessa viagem"
                required
                />
                <input 
                name="profession"
                type="text"
                value={form.profession}
                onChange={onChange}
                placeholder="Profissão"
                required
                />
                <input 
                name="country"
                type="text"
                value={form.country}
                onChange={onChange}
                placeholder="País"
                required
                />
                <div className="btn">
                    <button>Enviar</button>
                </div>
                <div className="btn">
                        <button onClick={() => goToHome(navigate)}>Home</button>
                    </div>
            </form>
            </div>
        </ContainerForm>
        </Container>
    )
}
export default TripsApplication