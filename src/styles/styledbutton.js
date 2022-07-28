import styled from "styled-components"

export const StyledButton = styled.button`
    width: 40%;
    height: 3rem;
    border: 0;
    border-radius: 8px;

    display: grid;
    align-content: center;

    font-size: 1rem;
    font-weight: bold;

    cursor: pointer;

    margin-bottom: 1rem;

    background: ${(props) => props.theme['blue-3']};
    color: ${(props) => props.theme['blue-1']};
    box-shadow: 1px 1px 5px black;


    &:hover {
        background: ${(props) => props.theme['blue-2']};
        opacity: 0.7;
    }

    a {
        text-decoration: none;
        color: ${(props) => props.theme['blue-1']};
        width: 100%;
        height: 3rem;
        display: grid;
        align-content: center;
    }
`
