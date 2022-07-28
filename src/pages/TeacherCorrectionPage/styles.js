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
    }

    img {
        margin-top: 0.5rem;
        max-width: 100%;
    }
`

