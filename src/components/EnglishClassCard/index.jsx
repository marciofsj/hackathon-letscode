import { DivButton, ClassCardMain, HeadContainer, SubjectContainer} from './styles';
import TextEditorContainer from '../TextEditor';
import { Link } from 'react-router-dom';

export function EnglishClassCard () {
    return (
        <ClassCardMain>
            <h3>The Shepherd's Boy and the Wolf</h3>
            <HeadContainer>
                <span>INGLES</span>
                <span>7ª série</span>
                <span>Conteúdo</span>
            </HeadContainer>
            <SubjectContainer>
                <p>
                    A Shepherd-boy, who watched a flock of sheep near a village, brought out the villagers three or four times by crying out, "Wolf! Wolf!", and when his neighbors came to help him, laughed at them for their pains. The Wolf, however, did truly come at last. The Shepherd-boy, now really alarmed, shouted in an agony of terror: "Pray, do come and help me; the Wolf is killing the sheep;" but no one paid heed to his cries, nobody came to help. The Wolf, having no cause of fear, at his leisure, destroyed the whole flock. 
                </p>    
                <p>
                    <strong>Moral:</strong> There is no believing a liar, even when he speaks the truth.
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