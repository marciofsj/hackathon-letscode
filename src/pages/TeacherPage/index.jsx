import { TeacherMainContainer, MenuContainer } from './styles';
import Logo from '../../assets/images/logo.png'
import { TeacherCard } from '../../components/TeacherCard';


export function TeacherMainPage () {
    return (
        <TeacherMainContainer>
            <MenuContainer>
                <img src={Logo}/>
                <h2>Histórico de exercícios</h2>
                <p>The Shepherd's Boy and the Wolf</p>
                <p>The Middle - Zedd feat. Maren Morris and Grey </p>
                <p>Exercise I - Grammar</p>
            </MenuContainer>
            <TeacherCard />         
        </TeacherMainContainer>
    )
}