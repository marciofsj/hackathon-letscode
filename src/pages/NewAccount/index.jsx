import { StyledButton } from "../../styles/styledbutton"
import { NewAccountContainer } from "./styles";
import { Link } from 'react-router-dom';

export function NewAccount () {
    return (
        <NewAccountContainer>
            <h1>KAREN</h1>
            <h2>Boss School</h2>

            <h3>CADASTRAR COMO:</h3>
            
            <StyledButton type="submit">
                <Link to="/cadastro-aluno">ALUNO(A)</Link>
            </StyledButton>
            <StyledButton type="submit">
                <Link to="/cadastro-professor">PROFESSOR(A)</Link>
            </StyledButton>
        </NewAccountContainer>
    )
}