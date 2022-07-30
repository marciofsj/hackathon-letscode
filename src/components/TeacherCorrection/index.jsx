import { DivButton, ClassCardMain, HeadContainer, SubjectContainer} from './styles';
import {TextEditorContainer} from '../TextEditor';
import { Link } from 'react-router-dom';

export function CorrectionCard () {
    return (
        <ClassCardMain>
            <h3>CORREÇÃO</h3>
            <HeadContainer>
                <span>INGLES</span>
                <span>7ª série</span>
                <span>Conteúdo</span>
            </HeadContainer>
            <SubjectContainer>
                <p>
                    RESOLUÇÃO DO ALUNO
                    RESOLUÇÃO DO ALUNO
                    RESOLUÇÃO DO ALUNO
                </p>    
            </SubjectContainer>
            <div>Comentários e correções:</div>
            <TextEditorContainer/>
            <DivButton>
                <button>
                    ENVIAR
                    {/* <Link to="/">ENVIAR</Link> */}
                </button>
                <button >
                    VOLTAR
                    {/* <Link to="/professor">VOLTAR</Link> */}
                </button>
            </DivButton>
        </ClassCardMain>
    )
}