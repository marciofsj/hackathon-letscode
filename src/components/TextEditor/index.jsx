import React, { Component, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { TextArea } from './styles';

let data = ''

class TextEditorContainer extends Component {

    
    render() {

        return (
            <>
            <TextArea>    
                <CKEditor 
                    editor={ ClassicEditor }
                    data="<strong></strong>"
                
                    onReady={ editor => {
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        data = editor.getData();
                        
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

            <button> Teste </button>
            </>
        );
    }
}

let cleanData = data.replace('<p>', '')
data = cleanData

export {TextEditorContainer, data};
