import { DivButton, ClassCardMain, HeadContainer, SubjectContainer} from './styles';
import {TextEditorContainer} from '../TextEditor';


export function EnglishClassCard () {
    const exercises = (JSON.parse(localStorage.getItem('teacherExercise')))
    const exercise = (exercises.filter(e => e.materia === "inglês"))[0]

    return (
        <ClassCardMain>
            <h3>{exercise.titulo}</h3>
            <HeadContainer>
                <span>{exercise.materia.toUpperCase()}</span>
                <span>{`${exercise.turma}ª série`}</span>
                <span>{exercise.categoria}</span>
            </HeadContainer>
            <SubjectContainer>

                <div dangerouslySetInnerHTML={{__html: exercise.conteudo}}/>



            </SubjectContainer>
            <div>Sua resposta:</div>
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