import { TeacherCardMain, SelectComponent, DivButton } from './styles';
import TextEditorContainer from '../../components/TextEditor';

export function TeacherCard () {
    return (
        <TeacherCardMain>
            <h1>OLÁ, PROFESSOR!</h1>
            <DivButton className='new__button'>
                <button>NOVA ATIVIDADE</button>
            </DivButton>
            <SelectComponent>
                <div>
                    <label for="turma">TURMA:</label>
                    <select name="turma" id="turma">
                        <optgroup label="selecione">
                            <option value="null">-------</option>
                            <option value="6">6ª</option>
                            <option value="7">7ª</option>
                            <option value="8">8ª</option>
                            <option value="9">9ª</option>
                        </optgroup>
                    </select>
                </div>
                <div>
                    <label for="matéria">MATÉRIA:</label>
                    <select name="matéria" id="matéria">
                        <optgroup label="selecione">
                            <option value="null">-------</option>
                            <option value="inglês">INGLÊS</option>
                            <option value="espanhol">ESPANHOL</option>
                        </optgroup>
                    </select>
                </div>
                <div>
                    <label for="categoria">CATEGORIA:</label>
                    <select name="categoria" id="categoria">
                        <optgroup label="selecione">
                            <option value="null">-------</option>
                            <option value="exercício">EXERCÍCIO</option>
                            <option value="conteúdo">CONTEÚDO</option>
                            <option value="conteúdo">EXTRA CURRICULAR</option>
                        </optgroup>
                    </select>
                </div>
            </SelectComponent>
            <input type="text" placeholder='insira o título'/>
            <TextEditorContainer>Atividade</TextEditorContainer>
            <DivButton>
                {/* NÃO ENCAMINHAR A NENHUMA PAGE. APENAS AÇÃO DOS BOTÕES */}
                <button>CANCELAR</button>
                <button>ENVIAR</button>
            </DivButton>
        </TeacherCardMain>
    )
}