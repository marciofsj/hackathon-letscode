import styled from "styled-components";

export const TeacherCardMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background:  ${props => props.theme['blue-1']};
    font-size: 1.5rem;
    border-radius: 8px;
    margin: 1rem auto;
    padding: 1rem;
    max-width: 80%; 

    .new__button {
        width: 100%;
        margin-top: 1rem;

        @media (max-width: 768px) {
            width: 50%;     
        }
    }

    input {
        font-size: 1.5rem;
        margin-top: 1.5rem;
        width: 80%;

        &::placeholder {
            padding: 0.5rem;
            font-size: 1.5rem;
        }
    }

`

export const DivButton = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: flex-start;

    @media (max-width: 768px) {
        html{
            font-size: 87.5%;
        }
            grid-template-columns: 1fr;
            gap: 0;
    }

    button {
        border: 0;
        padding: 1rem;
        border-radius: 8px;
    
        display: flex;
        align-items: center;
        justify-content: center;
    
        font-size: 1rem;
        font-weight: bold;
    
        cursor: pointer;
    
        margin-top: 1rem;
    
        background: ${(props) => props.theme['blue-3']};
        color: ${(props) => props.theme['blue-1']};
    
        &:hover {
            background: ${(props) => props.theme['blue-2']};
            opacity: 0.7;
        }
    
        a {
            text-decoration: none;
            color: ${(props) => props.theme['blue-1']};
        }
    }
`

export const SelectComponent = styled.div`
    display: flex;
    align-items: left;
    gap: 0.5rem;
    flex-wrap: wrap;

    margin-top: 1rem;
    font-size: 1.5rem;

    div {
        margin-top: 1rem;
    }

    select {
        margin-right: 1.5rem;
        font-size: 1.5rem;
        border-radius: 8px;

        &::placeholder {
            padding: 0.5rem;
            font-size: 1.5rem;
        }
    }
`