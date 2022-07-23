import { NewAccountContainer, InputContainer, RadioContainer } from "./styles"
import { StyledButton } from "../../styles/styledbutton"
import { Link } from "react-router-dom"

export function NewTeacherAccount () {
    return (
        <NewAccountContainer>
            <h1>KAREN</h1>
            <h2>Boss School</h2>

            <h3>OLÁ, PROFESSOR(A)!</h3>

            <InputContainer>
                <p>NOME</p>
                <input type="text" name="nome" placeholder="insira seu nome"/>
                <p>RG</p>
                <input type="text" name="RG" placeholder="insira seu RG"/>
                <p>CPF</p>
                <input type="text" name="CPF" placeholder="insira seu CPF"/>
                <p>DATA DE NASCIMENTO</p>
                <input type="date" name="data de nascimento" placeholder="insira sua data de nascimento"/>
                <p>SENHA</p>
                <input type="password" name="nova senha" placeholder="crie uma senha"/>                             
                <p>REPITA A SENHA</p>
                <input type="password" name="repetir senha" placeholder="repita a sua senha"/>                            
            </InputContainer>
            <StyledButton type="submit">
                <Link to="/professor">
                    CADASTRAR
                </Link>
            </StyledButton>
        </NewAccountContainer>
    )
}