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
        margin-bottom: 0.5rem;
        cursor: pointer;

        &:hover {
        opacity: 0.7;
        }
    }

    img {
        margin-top: 0.5rem;
        max-width: 100%;
    }
`