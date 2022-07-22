import styled from "styled-components";

export const NewAccountContainer = styled.div`
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

    h3 {
        margin: 3rem 0 1rem 0;
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

export const ClassContainer = styled.div`
    margin-bottom: 1rem;
    font-size: 1.5rem;

    select {
        font-size: 1.5rem;
        margin-left: 0.5rem;
        border-radius: 8px; 
    }
`