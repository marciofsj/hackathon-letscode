import { DivButton, ClassCardMain} from './styles';
import { TextEditorContainer } from '../TextEditor';

export function ClassCard () {
    return (
        <ClassCardMain>
            <h2>TÍTULO DO CONTEÚDO</h2>
            <span>7ª série</span>
            <span>INGLES</span>
            <textarea>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eum nulla eos voluptatem natus quaerat dolore suscipit beatae. 
                Placeat nam totam eaque nobis quam voluptatum fugit inventore, accusamus facilis dolor?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui commodi, voluptatem sunt quaerat laborum nobis, enim tenetur cupiditate dignissimos eveniet saepe error labore quis. Ipsa est eaque ratione sequi porro?
            </textarea>
            <TextEditorContainer />
            <DivButton>
                <button>ENTRAR</button>
            </DivButton>
        </ClassCardMain>
    )
}