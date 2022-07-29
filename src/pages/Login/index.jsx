import { Link, Navigate } from "react-router-dom";
import { InputContainer, FooterContainer, LoginContainer, RadioContainer } from "./styles";
import { StyledButton } from "../../styles/styledbutton";
import { useState } from "react";
import logomarca from '../../assets/images/Edutrip.png'
export function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profile, setProfile] = useState("professor")
    
    const handleLogin = () => {
        const validated = validateLogin(email,password,profile)
        // console.log(validated)
        if(validated){
            if(profile == "aluno"){
                Navigate("/StudentPage")
            }
            if(profile == "profrssor"){
                Navigate("/TeacherPage")
            }
        }

    }

    const validateLogin = (email, password, profile) =>{
        if(profile == "professor"){

            const teachers = JSON.parse(localStorage.getItem('teachersAccount'))
            const loginAtempt = {'email': email,'password': password}
            const user = teachers.filter(t => t.email == loginAtempt.email)
            console.log(teachers)
            console.log(loginAtempt)
            console.log(user)

            if(user.length==1 && user[0].password == loginAtempt.password){
                return true
            }
            else{
                alert("usuário não encontrado ou senha incorreta")
                return false
            }
        }
        }
    

    return (
        <LoginContainer>
                <img src={logomarca} alt="lápis desenhando um avião de papel" />

                <InputContainer>
                    <RadioContainer>
                        <legend>Você é um:</legend>
                        <div>
                            <input type="radio" name="logar como" id="aluno" value="aluno" checked={profile == "aluno"} onChange={(e) => setProfile(e.target.value)}/>
                            <label for="aluno">Aluno</label>
                        </div>
                        <div>
                            <input type="radio" name="logar como" id="professor" value="professor" checked={profile == "professor"} onChange={(e) => setProfile(e.target.value)}/>
                            <label for="professor">Professor</label>
                        </div>
                    </RadioContainer>
                    <p>LOGIN</p>
                    <input 
                        type="email" 
                        name="login" 
                        placeholder="insira seu e-mail"
                        required="required" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <p>SENHA</p>
                    <input 
                        type="password" 
                        name="senha" 
                        placeholder="insira sua senha" 
                        required="required"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </InputContainer>

                <StyledButton type="submit" onClick={handleLogin}>
                    ENTRAR
                </StyledButton>
                <FooterContainer>
                    <Link to=''>Esqueci minha senha</Link>
                    <Link to="/novo-cadastro">Nova conta</Link>
                </FooterContainer>
        </LoginContainer>
    )
}
