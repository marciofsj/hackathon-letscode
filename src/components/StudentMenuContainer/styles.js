import styled from "styled-components";

export const MenuContainer = styled.aside`
    margin: 0;
    padding: 0;
    left: 0;
    top: 0rem;
    height: 100%;
    font-size: 1.2rem;
    text-align: center;
    background:  ${props => props.theme['blue-2']};

    p {
        font-size: 1.5rem;
        margin: 0.5rem 0 0.5rem 0;
        cursor: pointer;
        
        &:hover {
        opacity: 0.7;
        }
    }

    img {
        margin-top: 0.5rem;
        max-width: 100%;
    }

    
    button {
        background-color: Transparent;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        overflow: hidden;
        outline: none;
        box-shadow: none;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1rem;
    }
`