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
    box-shadow: 1px 1px 10px black;
    
    img {
        margin-top: 1rem;
        margin-bottom: 1rem;
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

    h3 {
        margin-bottom: 1rem;
    }
`