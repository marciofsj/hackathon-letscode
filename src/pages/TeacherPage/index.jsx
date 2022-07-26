import { TeacherMainContainer, MenuContainer, DivButton, BodyContainer, SelectComponent } from './styles';
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
                        <label for="matéria">MATÉRIA:</label>
                        <select name="matéria" id="matéria">
                            <optgroup label="selecione">
                                <option value="null">-------</option>
                                <option value="inglês">INGLÊS</option>
                                <option value="espanhol">ESPANHOL</option>
                            </optgroup>
                        </select>
                    </div>
                </SelectComponent>
                <SelectComponent>
                    <div>
                        <label for="categoria">CATEGORIA:</label>
                        <select name="categoria" id="categoria">
                            <optgroup label="selecione">
                                <option value="null">-------</option>
                                <option value="exercício">EXERCÍCIO</option>
                                <option value="conteúdo">CONTEÚDO</option>
                            </optgroup>
                        </select>
                    </div>
                </SelectComponent>
                
                <TextEditorContainer>Atividade</TextEditorContainer>
                <DivButton>
                    <button>CANCELAR</button>
                    <button>ENVIAR</button>
                </DivButton>
            </BodyContainer>
        </TeacherMainContainer>
    )
}