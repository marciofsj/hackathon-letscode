import styled from "styled-components";

export const TeacherMainContainer = styled.div`
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

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background:  ${props => props.theme['blue-1']};
    font-size: 1.5rem;
    border-radius: 8px;
    margin: 1rem auto;
    padding: 1rem;
    max-width: 80%;
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

    img {
        margin-top: 0.5rem;
        max-width: 100%;
    }
`

export const DivButton = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: flex-start;

    @media (max-width: 768px) {
        html{
            font-size: 87.5%;
        }
            grid-template-columns: 1fr;
            gap: 0;
    }

    button {
        border: 0;
        padding: 1rem;
        border-radius: 8px;
    
        display: flex;
        align-items: center;
        justify-content: center;
    
        font-size: 1rem;
        font-weight: bold;
    
        cursor: pointer;
    
        margin-top: 1rem;
    
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
    }
`