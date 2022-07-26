import { StyledButton } from "../../styles/styledbutton"
import { NewAccountContainer } from "./styles";
import { Link } from 'react-router-dom';
import logomarca from '../../assets/images/Edutrip.png'

export function NewAccount () {
    return (
        <NewAccountContainer>
            <img src={logomarca} alt="lápis desenhando um avião de papel" />

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