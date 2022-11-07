import axios from "axios"
import React from "react"
import Header from "../../Components/Header/Header"
import useForm from "../../Hooks/useForm"
import UseProtectedPage from "../../Hooks/useProtectedPage"
import { BASE_URL } from "../../Services/Url"
import { Container, ContainerForm } from "./Styled"

const AdminTripsCreate = () => {
    UseProtectedPage()
    const [form, onChange, clear] = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""
    })

    const onSubmitForm = (e) => {
        e.preventDefault()
        create()
        console.log(form)
    }

    const create = () => {
        axios.post(`${BASE_URL}/trips`, form, {
            headers: {auth: localStorage.getItem("token")}
        })
          .then((res) => {
            alert("Viagem criada com sucesso")
          })
          .catch((erro) => {
            console.log(erro)
          })
    }
    return(
        <Container>
            <Header />
        <ContainerForm>
            <div>
            <form onSubmit={onSubmitForm}>
                <h2>Criar viagens</h2>
                <input 
                name="name"
                type="text"
                value={form.name}
                onChange={onChange}
                placeholder="Nome da viagem"
                pattern={"^.{3,}"}
                title={"O nome deve ter no mínimo 3 letras"}
                required
                />
                <input 
                name="planet"
                type="text"
                value={form.planet}
                onChange={onChange}
                placeholder="Planeta"
                pattern={"^.{3,}"}
                title={"O nome deve ter no mínimo 3 letras"}
                required
                />
                <input 
                name="date"
                type="date"
                value={form.date}
                onChange={onChange}
                placeholder="Data"
                required
                />
                <input 
                name="description"
                type="text"
                value={form.country}
                onChange={onChange}
                placeholder="Descrição"
                pattern={"^.{5,}"}
                title={"O nome deve ter no mínimo 5 letras"}
                required
                />
                <input 
                name="durationInDays"
                type="number"
                value={form.durationInDays}
                onChange={onChange}
                placeholder="Duração da viagem"
                required
                />
                <button>Criar</button>
            </form>
            </div>
        </ContainerForm>
        </Container>
    )
}
export default AdminTripsCreate