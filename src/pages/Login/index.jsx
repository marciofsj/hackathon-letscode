import { Link } from "react-router-dom";
import { InputContainer, FooterContainer, LoginContainer, RadioContainer } from "./styles";
import { StyledButton } from "../../styles/styledbutton";
import { useState } from "react";
import logomarca from '../../assets/images/Edutrip.png'

export function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log(email)
        console.log(password)
    }

    return (
        <LoginContainer>
                <img src={logomarca} alt="lápis desenhando um avião de papel" />

                <InputContainer>
                    <RadioContainer>
                        <legend>Você é um:</legend>
                        <div>
                            <input type="radio" name="logar como" id="aluno"/>
                            <label for="aluno">Aluno</label>
                        </div>
                        <div>
                            <input type="radio" name="logar como" id="professor"/>
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