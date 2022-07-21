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
    }
`

export const EnterButton = styled.button`
    width: 40%;
    border: 0;
    padding: 1rem;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.5rem;
    font-weight: bold;

    cursor: pointer;

    background: ${(props) => props.theme['blue-3']};
    color: ${(props) => props.theme['blue-1']};

    &:hover {
        background: ${(props) => props.theme['blue-2']};
        opacity: 0.7;
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

