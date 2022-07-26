import { StudentMainContainer, BodyContainer, DivButton, MenuContainer } from './styles';
import Logo from '../../assets/images/logo.png';
import TextEditorContainer from '../../components/TextEditor';

export function StudentMainPage () {
    return (
        <StudentMainContainer>
            <MenuContainer>
                <img src={Logo}/>
                <h2>Atividades em aberto</h2>
                <p>Conteúdo Espanhol</p>
                <p>Atividade de Inglês</p>
            </MenuContainer>
            <BodyContainer>
                <h1>Olá, Aluno!</h1>
                
                <TextEditorContainer>Atividade</TextEditorContainer>
                <DivButton>
                    <button>CANCELAR</button>
                    <button>ENVIAR</button>
                </DivButton>
            </BodyContainer>
        </StudentMainContainer>
    )
}