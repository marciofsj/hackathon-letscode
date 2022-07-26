import styled from "styled-components";

export const TextArea = styled.div`
    width: 100%;
    margin: 1rem;
    border-radius: 8px;
    font-size: 1rem;
    box-shadow: 1px 1px 5px gray;

    input {
        margin: 1rem 0rem;
        max-width: 80%;
        height: 1.8rem;
        font-size: 1.5rem;

        &::placeholder {
            font-weight: normal;
            padding: 0.5rem;
        }
    }

    select {
        margin: 0.5rem 0 1rem 0;
        width: 100px;
        height: 30px;

        &::placeholder {
            padding: 0.5rem;
            font-size: 1.5rem;
        }
    }
`