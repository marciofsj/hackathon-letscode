import { TeacherCardMain, SelectComponent, DivButton } from './styles';
import {TextEditorContainer, data} from '../../components/TextEditor';
import { useState } from 'react';


export function TeacherCard () {

    const [turma, setTurma] = useState('')
    const [materia, setMateria] = useState('')
    const [categoria, setCategoria] = useState('')
    const [titulo, setTitulo] = useState('')
    // const [conteudo, setConteudo] = useState('')
    // const [exercicio, setExercicio] = useState('')

    const handleRequest = () => {
        switch (categoria) {
            case 'exercício':

                const exercises = JSON.parse(localStorage.getItem('teacherExercise'))
                const exercise = {
                    'turma':turma,
                    'materia':materia,
                    'categoria':categoria,
                    'titulo':titulo,
                    'conteudo':data,
                }
                exercises.push(exercise)
                localStorage.setItem('teacherExercise',JSON.stringify(exercises))
                alert('Exercício postado')
                break;
            case 'conteúdo':
                const contents = JSON.parse(localStorage.getItem('teacherContent'))
                const content = {
                    'turma':turma,
                    'materia':materia,
                    'categoria':categoria,
                    'titulo':titulo,
                    'conteudo':data,
                }
                contents.push(content)
                localStorage.setItem('teacherContent',JSON.stringify(contents))
                alert('Conteúdo postado')
                break;
            case 'extra-classe':
                console.log('é um conteudo extra')
                break;
            default:
                alert('Selecione um conteudo!')
        }   
    }

    return (
        <TeacherCardMain>
            <h1>OLÁ, PROFESSOR!</h1>
            <DivButton className='new__button'>
                <button>NOVA ATIVIDADE</button>
            </DivButton>
            
            <SelectComponent>
                <div>
                    <label for="turma">TURMA:</label>
                    <select onChange={e => setTurma(e.target.value)} name="turma" id="turma">
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
                    <select onChange={e => setMateria(e.target.value)} name="matéria" id="matéria">
                        <optgroup label="selecione">
                            <option value="null">-------</option>
                            <option value="inglês">INGLÊS</option>
                            <option value="espanhol">ESPANHOL</option>
                        </optgroup>
                    </select>
                </div>
                <div>
                    <label for="categoria">CATEGORIA:</label>
                    <select onChange={e => setCategoria(e.target.value)} name="categoria" id="categoria">
                        <optgroup label="selecione">
                            <option value="null">-------</option>
                            <option value="exercício">EXERCÍCIO</option>
                            <option value="conteúdo">CONTEÚDO</option>
                            <option value="extra-classe">EXTRA CURRICULAR</option>
                        </optgroup>
                    </select>
                </div>
            </SelectComponent>
            <input onChange={e => setTitulo(e.target.value)} type="text" placeholder='insira o título'/>
            <TextEditorContainer >Atividade</TextEditorContainer>
            <DivButton>
                {/* NÃO ENCAMINHAR A NENHUMA PAGE. APENAS AÇÃO DOS BOTÕES */}
                <button>CANCELAR</button>
                <button onClick={() => handleRequest()}>ENVIAR</button>
            </DivButton>
        </TeacherCardMain>
    )
}