import { DivButton, ClassCardMain, HeadContainer, SubjectContainer} from './styles';
import TextEditorContainer from '../TextEditor';
import { Link } from 'react-router-dom';

export function SpanishClassCard () {
    return (
        <ClassCardMain>
            <h3>título de la actividad</h3>
            <HeadContainer>
                <span>ESPANHOL</span>
                <span>9ª série</span>
                <span>Contenido</span>
            </HeadContainer>
            <SubjectContainer>
                <p>
                    Cuándo? Donde? <br />
                    Pero que si
                </p>    
            </SubjectContainer>
            <div>Sua resposta:</div>
            <TextEditorContainer/>
            <DivButton>
                <button >
                    VOLTAR
                    {/* <Link to="/professor">VOLTAR</Link> */}
                </button>
                <button>
                    ENVIAR
                    {/* <Link to="/">ENVIAR</Link> */}
                </button>
            </DivButton>
        </ClassCardMain>
    )
}