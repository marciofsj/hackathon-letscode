import styled from "styled-components";

export const LoginContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background:  ${props => props.theme['blue-1']};
    font-size: 1.5rem;
    border-radius: 8px;
    margin: 1rem auto;
    padding: 1rem;
    max-width: 50rem;

    @media (max-width: 768px) {
        html{
            font-size: 87.5%;
        }
    }
`

export const InputContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.5;
    margin: 2rem;
    width: 40%;
    font-size: 1.5rem;

    input {
        font-size: 2rem;
        margin-bottom: 1rem;
        border-radius: 8px;

        &::placeholder {
            padding: 0.5rem;
            font-size: 1.5rem;
        }
    }
`

export const RadioContainer = styled.fieldset`
    margin-bottom: 1rem;
    border: none;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    input {
        margin: .4rem;
        height: 1rem;
        width: 1rem;

        &:placeholder-shown {
            padding: 0.5rem;
        }
    }
`

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 1rem;
    
    a {
        color: black;
        margin-top: 1rem;
        font-size: 1.5rem;

        &:hover {
        background: ${(props) => props.theme['blue-2']};
        color: ${props => props.theme['blue-1']};
        opacity: 0.7;
    }
    }
   
`

