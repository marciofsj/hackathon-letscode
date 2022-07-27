import { TeacherMainContainer, MenuContainer } from './styles';
import Logo from '../../assets/images/logo.png'
import { TeacherCard } from '../../components/TeacherCard';


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
            <TeacherCard />         
        </TeacherMainContainer>
    )
}