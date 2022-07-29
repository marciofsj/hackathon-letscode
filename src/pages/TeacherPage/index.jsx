import { TeacherMainContainer } from './styles';
import { TeacherCard } from '../../components/TeacherCard';
import { SideMenuContainer } from '../../components/MenuContainer';


export function TeacherMainPage () {
    return (
        <TeacherMainContainer>
            <SideMenuContainer />
            <TeacherCard />         
        </TeacherMainContainer>
    )
}