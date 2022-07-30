import { DivButton, ClassCardMain, HeadContainer, SubjectContainer} from './styles';
import {TextEditorContainer} from '../TextEditor';
import { Link } from 'react-router-dom';

export function SpanishClassCard () {
    return (
        <ClassCardMain>
            <h3>LOS SUSTANTIVOS</h3>
            <HeadContainer>
                <span>ESPANHOL</span>
                <span>9ª série</span>
                <span>Contenido</span>
            </HeadContainer>
            <SubjectContainer>
                <p>
                    Os substantivos em Espanhol do gênero masculino são aqueles que no geral (lembrando que existem exceções) terminam em -o e -or. Veja exemplos:<br/>
                    El gato.<br/>
                    (O gato)<br/>
                    El señor.<br/>
                    (O senhor)<br/>
                    El amigo.<br/>
                    (O amigo)<br/>
                    El cielo.<br/>
                    (O céu)<br/>
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