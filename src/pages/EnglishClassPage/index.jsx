import { ClassMainContainer } from './styles';
import { EnglishClassCard } from '../../components/EnglishClassCard';
import { StudentSideMenuContainer } from '../../components/StudentMenuContainer';


export function EnglishClassMainPage () {
    return (
        <ClassMainContainer>
            <StudentSideMenuContainer />
            <EnglishClassCard />
        </ClassMainContainer>
    )
}