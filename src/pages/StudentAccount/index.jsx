import { useState } from "react";
import { NewAccountContainer, InputContainer, ClassContainer } from "./styles"
import { StyledButton } from "../../styles/styledbutton"
import logomarca from '../../assets/images/Edutrip.png'
import { useNavigate } from "react-router-dom";
import { validEmail, validPassword } from "../../utils/regex";

export function NewStudentAccount () {
    const [newName, setNewName] = useState ('');
    const [newEmail, setNewEmail] = useState('');
    const [newDate, setNewDate] = useState('');
    const [newPassword, setNewPassword] = useState ('');
    const [repeatPassword, setRepeatNewPassword] = useState ('');
    const [validated, setValidation] = useState(true)
    const navigate = useNavigate()

    const [emailErr, setEmailErr] = useState(false);
    const [pwdError, setPwdError] = useState(false);

    const validate = () => {
        if (!validEmail.test(newEmail) || ((!validPassword.test(newPassword)) || newPassword !== repeatPassword)) {
          
          if (!validEmail.test(newEmail)) {
            return alert('Email inválido');
          }
          if ((!validPassword.test(newPassword)) 
            || newPassword !== repeatPassword) {
            return alert('Senha inválida, senha deve conter pelo menos 6 digitos e uma letra');
          }
          setValidation(false)
        } else {
          if (validated) {
            saveLogin()
            navigate('/aluno');
          }
        }
      }
    
      const saveLogin = () => {
        localStorage.setItem('studentsAccount', JSON.stringify({
          'email': newEmail,
          'password': newPassword
        }))
      }

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
                    onChange={e => setNewEmail(e.target.value)}
                />
                {/*<p>DATA DE NASCIMENTO</p>
                <input 
                    type="date" 
                    name="data de nascimento"
                    value={newDate}
                    onChange={e => setNewDate(e.target.value)}
                />*/}
                {/*<ClassContainer>
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
                </ClassContainer>*/}
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
            <StyledButton type="submit" onClick={() => validate()}>
                CADASTRAR
            </StyledButton>
        </NewAccountContainer>
    )
}