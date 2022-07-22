import styled from "styled-components"

export const StyledButton = styled.button`
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

    margin-bottom: 1rem;

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
`
