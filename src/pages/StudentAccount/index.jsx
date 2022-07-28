import { useState } from "react";
import { NewAccountContainer, InputContainer, ClassContainer } from "./styles"
import { StyledButton } from "../../styles/styledbutton"
import logomarca from '../../assets/images/Edutrip.png'
import { Link } from "react-router-dom";

export function NewStudentAccount () {
    const [newName, setNewName] = useState ('');
    const [newEmail, setNewEmail] = useState('');
    const [newDate, setNewDate] = useState('');
    const [newPassword, setNewPassword] = useState ('');
    const [repeatPassword, setRepeatNewPassword] = useState ('');

    const [emailErr, setEmailErr] = useState(false);
    const [pwdError, setPwdError] = useState(false);

    const validate = () => {
        if (!validEmail.test(newEmail)) {
           setEmailErr(true);
        }
        if (!validPassword.test(newPassword)) {
           setPwdError(true);
        }
    };

    return (
        <NewAccountContainer>
            <img src={logomarca} alt="lápis desenhando um avião de papel" />

            <h3>OLÁ, ALUNO!</h3>

            <InputContainer>
                {/*<p>NOME</p>
                <input 
                    type="text" 
                    name="nome" 
                    placeholder="insira seu nome"
                    alue={newName}
                    onChange={e => setNewName(e.target.value)}
                />*/}
                <p>E-MAIL</p>
                <input 
                    type="email" 
                    name="e-mail"
                    placeholder="insira seu e-mail"
                    value={newEmail}
                    onChange={e => setNewDate(e.target.value)}
                />
                {/*<p>DATA DE NASCIMENTO</p>
                <input 
                    type="date" 
                    name="data de nascimento"
                    value={newDate}
                    onChange={e => setNewEmail(e.target.value)}
                />*/}
                <ClassContainer>
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
                <input 
                    type="password" 
                    name="nova senha" 
                    placeholder="crie uma senha"
                    value={newPassword}
                    onChange={e => setNewPassword(e.target.value)}
                />                             
                <p>REPITA A SENHA</p>
                <input 
                    type="password" 
                    name="repetir senha" 
                    placeholder="repita a sua senha"
                    value={repeatPassword}
                    onChange={e => setRepeatNewPassword(e.target.value)}
                />                             
            </InputContainer>
            <StyledButton type="submit">
                <Link to="/aluno">
                    CADASTRAR
                </Link>

            </StyledButton>
        </NewAccountContainer>
    )
}