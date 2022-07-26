import { TeacherMainContainer, MenuContainer, DivButton, BodyContainer } from './styles';
import Logo from '../../assets/images/logo.png'
import TextEditorContainer from '../../components/TextEditor';

export function TeacherMainPage () {
    return (
        <TeacherMainContainer>
            <MenuContainer>
                <img src={Logo}/>
                <h2>Histórico de exercícios</h2>
                <p>La actividad doble</p>
                <p>Exercición tien</p>
                <p>Hello World</p>
                <p>Hello World</p>
                <p>Hello World</p>
                <p>Hello World</p>
                <p>Hello World</p>
                <p>Hello World</p>
            </MenuContainer>

            <BodyContainer>
                <h1>Olá, Professor!</h1>
                <DivButton className='new__button'>
                    <button>NOVA ATIVIDADE</button>
                </DivButton>
                <TextEditorContainer>Atividade</TextEditorContainer>
                <DivButton>
                    <button>CANCELAR</button>
                    <button>ENVIAR</button>
                </DivButton>
            </BodyContainer>
        </TeacherMainContainer>
    )
}