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