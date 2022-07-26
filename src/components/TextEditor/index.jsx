import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { TextArea, SelectComponent } from './styles';

class TextEditorContainer extends Component {
    render() {
        return (
            <TextArea>
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
                <input type="text" placeholder='insira o título'/>
                <CKEditor
                    editor={ ClassicEditor }
                    data="<p></p>"
                    onReady={ editor => {
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
            </TextArea>
        );
    }
}

export default TextEditorContainer;
