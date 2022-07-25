
import { Link } from "react-router-dom";
import { InputContainer, FooterContainer, LoginContainer, RadioContainer } from "./styles";
import { StyledButton } from "../../styles/styledbutton";

export function Login () {
    return (
        <LoginContainer>
                <h1>KAREN</h1>
                <h2>Boss School</h2>

                <InputContainer>
                    <RadioContainer>
                        <legend>Você é:</legend>
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
                    <input type="email" name="insira seu e-mail" placeholder="insira seu e-mail" id=""/>
                    <p>SENHA</p>
                    <input type="password" name="" placeholder="insira sua senha" id="" />
                </InputContainer>

                <StyledButton type="submit">
                    ENTRAR
                </StyledButton>
                <FooterContainer>
                    <Link to=''>Esqueci minha senha</Link>
                    <Link to="/novo-cadastro">Nova conta</Link>
                </FooterContainer>
        </LoginContainer>
    )
}