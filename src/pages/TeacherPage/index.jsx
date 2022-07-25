import { TeacherMainContainer, MenuContainer, DivButton, BodyContainer } from './styles';
import Logo from '../../images/logo-remove.png';
import TextEditorContainer from '../../components/TextEditor';

export function TeacherMainPage () {
    return (
        <TeacherMainContainer>
            <MenuContainer>
                <img src={Logo}/>
                <h2>Hello World</h2>
                <h2>Hello World</h2>
                <h2>Hello World</h2>
                <h2>Hello World</h2>
                <h2>Hello World</h2>
                <h2>Hello World</h2>
                <h2>Hello World</h2>
                <h2>Hello World</h2>
                <h2>Hello World</h2>
            </MenuContainer>

            <BodyContainer>
                <h1>Olá, Professor!</h1>
                <label for="story">Atividade 1</label>
                
                <TextEditorContainer>Atividade</TextEditorContainer>
                <DivButton>
                    <button>CANCELAR</button>
                    <button>ENVIAR</button>
                </DivButton>
            </BodyContainer>
        </TeacherMainContainer>
    )
}