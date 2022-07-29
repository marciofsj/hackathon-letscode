import styled from "styled-components";

export const TeacherCorrectionContainer = styled.div`
    max-width: 70rem;
    margin: 2rem auto;
    padding: 0 1rem;
    display: grid;
    grid-template-columns: 30% 1fr;
    align-items: flex-start;

    @media (max-width: 768px) {
    html{
        font-size: 87.5%;
    }
        grid-template-columns: 1fr;
}
`