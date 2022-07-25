import styled from "styled-components";

export const TextArea = styled.div`
    width: 100%;
    margin: 1rem;
    border-radius: 8px;

    input {
        margin: 1rem 0;
        font-weight: bold;
        border-radius: 8px;
        max-width: 80%;

        &:placeholder-shown {
            font-weight: normal;
            padding: 0.5rem;
        }
    }
`