import { TeacherMainContainer } from './styles';
import { TeacherCard } from '../../components/TeacherCard';
import { TeacherSideMenuContainer } from '../../components/TeacherMenuContainer';


export function TeacherMainPage () {
    return (
        <TeacherMainContainer>
            <TeacherSideMenuContainer/>       
            <TeacherCard />  
        </TeacherMainContainer>
    )
}