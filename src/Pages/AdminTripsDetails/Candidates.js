import React, { useState } from "react"
import { Container } from "./Styled";


const Candidates = (props) => {

    const approveCandidate = () => {
        props.decideCandidate(true, props.candidate.id)
        alert("Aprovado com sucesso")
    }

    const rejectCandidate = () => {
        props.decideCandidate(false, props.candidate.id)
        alert("Recusado com sucesso")
    }
    return(
        <Container>
          <div>
            <p>Nome do Candidato: {props.candidate.name}</p>
            <p>Idade: {props.candidate.age}</p>
            <p>Profissão: {props.candidate.profession}</p>
            <p>País: {props.candidate.country}</p>
            <div className="btn">
            <button className="btn" onClick={approveCandidate}>Aprovar</button>
            </div>
            <div className="btn">
            <button onClick={rejectCandidate}>Recusar</button>
        
            </div>
        </div>
        </Container>
    )
}
export default Candidates