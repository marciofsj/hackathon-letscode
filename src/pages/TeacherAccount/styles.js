import styled from "styled-components";

export const NewAccountContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme['blue-1']};
    font-size: 1.5rem;
    border-radius: 8px;
    margin: 1rem auto;
    padding: 1rem;
    max-width: 50rem;

    img {
        margin-top: 1rem;
    }

    @media (max-width: 768px) {
        html {
            font-size: 87.5%;
        }
        img {
            height: 80%;
            width: 80%;
        }
    }
`

export const InputContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.5;
    margin: 2rem;
    width: 70%;
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
