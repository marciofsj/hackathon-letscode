import { useState } from "react";
import { NewAccountContainer, InputContainer } from "./styles"
import { StyledButton } from "../../styles/styledbutton"
import { useNavigate } from "react-router-dom"
import { validEmail, validPassword, validCPF, validRG, validName } from '../../utils/regex.js'
import logomarca from '../../assets/images/Edutrip.png'

export function NewTeacherAccount() {
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newRG, setNewRG] = useState('');
  const [newCPF, setNewCPF] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatNewPassword] = useState('');
  const [validated, setValidation] = useState(true)
  const navigate = useNavigate()

  const validate = () => {

    if (!validEmail.test(newEmail) || ((!validPassword.test(newPassword)) || newPassword !== repeatPassword)
      || (!validCPF.test(newCPF)) || (!validRG.test(newRG)) || (!validName.test(newName)) || (!newDate)) {

      if (!validName.test(newName)) {
        return alert('insira um Nome válido sem caracteres especiais')
      }
      if (!validEmail.test(newEmail)) {
        return alert('Email inválido');
      }
      if (!validRG.test(newRG)) {
        console.log(newRG)
        return alert('insira um RG válido')
      }
      if (!validCPF.test(newCPF)) {
        return alert('Insira um CPF válido')
      }
      if (!newDate) {
        return alert('Insira uma data de Nacismento válida')
      }
      if ((!validPassword.test(newPassword)) 
        || newPassword !== repeatPassword) {
        return alert('Senha inválida, senha deve conter pelo menos 6 digitos e uma letra');
      }
      setValidation(false)
    } else {
      if (validated) {
        if(validateDuplicate()){
          navigate('/');
        }
      }
    }
  }
  
  const validateDuplicate = () =>{
    const teachers = JSON.parse(localStorage.getItem('teachersAccount'))
    const logionAtempt = {
      'name': newName,
      'email': newEmail,
      'password': newPassword,
      'data-nascimento': newDate,
      'RG': newRG,
      'CPF': newCPF
    }

    if((teachers.filter(t => t.email == logionAtempt.email).length)==0){
          teachers.push(logionAtempt)
          localStorage.setItem('teachersAccount', JSON.stringify(teachers))
      return true
    }
    else{
      alert("email já cadastrado")
      return false
    }

  }

  return (
    <NewAccountContainer>
      <img src={logomarca} alt="lápis desenhando um avião de papel" />

      <h3>OLÁ, PROFESSOR(A)!</h3>

      <InputContainer>
        <p>NOME</p>
          <input
            type="text"
            name="nome"
            placeholder="insira seu nome"
            value={newName}
            onChange={e => setNewName(e.target.value)}
          />
        <p>E-MAIL</p>
        <input
          type="email"
          name="e-mail"
          placeholder="insira seu e-mail"
          value={newEmail}
          onChange={e => setNewEmail(e.target.value)}
        />
        <p>RG</p>
          <input
            type="text"
            name="RG"
            placeholder="insira seu RG"
            value={newRG}
            onChange={e => setNewRG(e.target.value)}
          />
        <p>CPF</p>
          <input
            type="text"
            name="CPF"
            placeholder="insira seu CPF"
            value={newCPF}
            onChange={e => setNewCPF(e.target.value)}
          />
        <p>DATA DE NASCIMENTO</p>
          <input
            type="date"
            name="data de nascimento"
            value={newDate}
            onChange={e => setNewDate(e.target.value)}
          />
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
      <StyledButton type="submit" onClick={() => validate()} >
          CADASTRAR
      </StyledButton>
    </NewAccountContainer>
  )
}