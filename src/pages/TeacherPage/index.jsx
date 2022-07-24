import { TeacherMainContainer, MenuContainer } from './styles';
import Logo from '../../images/logo-remove.png';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export function TeacherMainPage () {
    return (
        <TeacherMainContainer>
            <MenuContainer>
                <img src={Logo}/>
                <h2>Hello World</h2>
                <h2>Hello World</h2>
                <h2>Hello World</h2>
                <h2>Hello World</h2>
                <h2>Hello World</h2>
                <h2>Hello World</h2>
                <h2>Hello World</h2>
                <h2>Hello World</h2>
                <h2>Hello World</h2>
            </MenuContainer>
            <h1>Hello World</h1>
            <label for="story">Atividade 1</label>
            <textarea id="story" name="story"
                rows="5" cols="33">
            </textarea>
            <label for="story">Atividade 2</label>
            <textarea id="story" name="story"
                rows="5" cols="33">
            </textarea>

        </TeacherMainContainer>
    )
}