import React from "react"
import { Container , Title, Itens} from "./Styled"
import Login from "../../Pages/Login/Login"
import UnProtectedPage from "../../Hooks/useUnProtectedPage"



const Home = () => {
    UnProtectedPage()
    return(
        <Container>
            <Itens>
            <Title>
                <h2>Seja Bem Vindo</h2>
            </Title>
            <div>
            <Login />
            </div>
            </Itens>
        </Container>
    )
}
export default Home