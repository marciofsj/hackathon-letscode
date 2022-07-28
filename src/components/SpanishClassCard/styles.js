import styled from "styled-components";

export const ClassCardMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background:  ${props => props.theme['blue-1']};
    font-size: 1.5rem;
    border-radius: 8px;
    margin: 1rem auto;
    padding: 1rem;
    max-width: 80%; 
    box-shadow: 1px 1px 10px black;

    .new__button {
        width: 100%;
        margin-top: 1rem;

        @media (max-width: 768px) {
            width: 50%;     
        }
    }

    h3{
        margin-bottom: 1rem;
    }

    textarea {
        width: 100%;
        max-width: 100%;
        min-width: 50%;
        height: 200px;
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
        box-shadow: 1px 1px 10px gray;
    
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
export const HeadContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem; 
    margin-bottom: 1rem;
`

export const SubjectContainer = styled.div`
    background: #fff;
    font-size: 1.5rem;
    padding: 1rem;
    margin-bottom: 1rem;
`