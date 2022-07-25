import styled from "styled-components";

export const TeacherMainContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background:  ${props => props.theme['blue-1']};
    font-size: 1.5rem;
    border-radius: 8px;
    margin: 1rem auto;
    padding: 1rem;
    width: 100%;
    height: 50rem;

    label {
        margin: 1rem 0 1rem 0;
    }
`

export const MenuContainer = styled.aside`
    margin: 0;
    padding: 0;
    position: fixed;
    width: 15%;
    left: 0;
    top: 0rem;
    height: 100%;
    font-size: 1.2rem;
    text-align: center;
    background:  ${props => props.theme['blue-2']};

    img {
        margin-top: 0.5rem;
        max-width: 100%;
        height: auto;
    }
`

export const DivButton = styled.div`
    display: flex;
    align-content: flex-start;

    button {
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
    }
`