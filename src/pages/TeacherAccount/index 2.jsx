import { useState } from "react";
import { NewAccountContainer, InputContainer } from "./styles"
import { StyledButton } from "../../styles/styledbutton"
import { Link, Redirect } from "react-router-dom"
import { validEmail, validPassword } from '../../utils/regex.js'
import logomarca from '../../assets/images/Edutrip.png'

export function NewTeacherAccount() {
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepetNewPassword] = useState('');
  // const [newName, setNewName] = useState('');
  // const [newRG, setNewRG] = useState('');
  // const [newCPF, setNewCPF] = useState('');
  // const [newDate, setNewDate] = useState('');
  // const [validated, setValitadion] = useState(false)

  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPaswordError] = useState(false);

  const validate = () => {
    if (!validEmail.test(newEmail)) {
      setPaswordError(true);
      alert('Email inválido')
    }
    if (!validPassword.test(newPassword) || (newPassword !== repeatPassword)) {
      setEmailErr(true);
      alert('Senha inválida')
    }
    if( !emailErr && !pwdError ){
      
    }

  };

  return (
    <NewAccountContainer>
      <img src={logomarca} alt="lápis desenhando um avião de papel" />

      <h3>OLÁ, PROFESSOR(A)!</h3>

      <InputContainer>
        {/*<p>NOME</p>
                <input
                    type="text"
                    name="nome"
                    placeholder="insira seu nome"
                    value={newname}
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
        {/*<p>RG</p>
                <input
                    type="number"
                    name="RG"
                    placeholder="insira seu RG"
                    value={newrg}
                    onChange={e => setNewRG(e.target.value)}
                />
                <p>CPF</p>
                <input
                    type="number"
                    name="CPF"
                    placeholder="insira seu CPF"
                    value={newcpf}
                    onChange={e => setNewCPF(e.target.value)}
                />
                <p>DATA DE NASCIMENTO</p>
                <input
                    type="date"
                    name="data de nascimento"
                    value={newdate}
                    onChange={e => setNewDate(e.target.value)}
                />*/}
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
          onChange={e => setRepetNewPassword(e.target.value)}
        />
      </InputContainer>
      <StyledButton type="submit" onClick={validate}>
        CADASTRAR
        {
          (!emailErr && !pwdError) && (
            <Link to={"/professor"}/>
          )
        }

      </StyledButton>
    </NewAccountContainer>
  )
}