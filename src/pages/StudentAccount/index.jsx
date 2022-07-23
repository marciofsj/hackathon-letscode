import { NewAccountContainer, InputContainer, ClassContainer } from "./styles"
import { StyledButton } from "../../styles/styledbutton"

export function NewStudentAccount () {
    return (
        <NewAccountContainer>
            <h1>KAREN</h1>
            <h2>Boss School</h2>

            <h3>OLÁ, ESTUDANTE!</h3>

            <InputContainer>
                <p>NOME</p>
                <input type="text" name="nome" placeholder="insira seu nome"/>
                <p>DATA DE NASCIMENTO</p>
                <input type="date" name="data de nascimento" placeholder="insira sua data de nascimento"/>     
                <ClassContainer>
                    {/* <label for="turma">
                        TURMA
                    </label> */}
                    TURMA
                    <select name="turma" id="turma">
                        <optgroup label="selecione">
                            <option value="null">-------</option>
                            <option value="6">6ª</option>
                            <option value="7">7ª</option>
                            <option value="8">8ª</option>
                            <option value="9">9ª</option>
                        </optgroup>
                    </select>
                </ClassContainer> 
                <p>SENHA</p>
                <input type="password" name="nova senha" placeholder="crie uma senha"/>                             
                <p>REPITA A SENHA</p>
                <input type="password" name="repetir senha" placeholder="repita a sua senha"/>                             
            </InputContainer>
            <StyledButton type="submit">
                CADASTRAR
            </StyledButton>
        </NewAccountContainer>
    )
}