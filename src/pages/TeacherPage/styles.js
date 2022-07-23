import styled from "styled-components";

export const TeacherMainContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background:  ${props => props.theme['blue-1']};
    font-size: 1.5rem;
    border-radius: 8px;
    margin: 1rem auto;
    padding: 1rem;
    width: 100%;
    height: 50rem;
`

export const MenuContainer = styled.div`
    margin: 0;
    padding: 0;
    position: fixed;
    width: 15%;
    left: 0;
    top: 0;
    height: 100%;
    font-size: 1.2rem;
    text-align: center;
    background:  ${props => props.theme['blue-2']};
`