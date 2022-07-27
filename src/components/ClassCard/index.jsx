import { DivButton, ClassCardMain, HeadContainer} from './styles';
import TextEditorContainer from '../../components/TextEditor';

export function ClassCard () {
    return (
        <ClassCardMain>
            <h3>TÍTULO DO CONTEÚDO</h3>
            <HeadContainer>
                <span>INGLES</span>
                <span>7ª série</span>
                <span>Conteúdo</span>
            </HeadContainer>
            <textarea>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eum nulla eos voluptatem natus quaerat dolore suscipit beatae. 
                Placeat nam totam eaque nobis quam voluptatum fugit inventore, accusamus facilis dolor?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui commodi, voluptatem sunt quaerat laborum nobis, enim tenetur cupiditate dignissimos eveniet saepe error labore quis. Ipsa est eaque ratione sequi porro?
            </textarea>
            <TextEditorContainer/>
            <DivButton>
                <button>VOLTAR</button>
            </DivButton>
        </ClassCardMain>
    )
}