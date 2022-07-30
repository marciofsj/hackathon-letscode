import { ClassMainContainer } from './styles';
import { SpanishClassCard } from '../../components/SpanishClassCard';
import { StudentSideMenuContainer } from '../../components/StudentMenuContainer';


export function SpanishClassMainPage () {
    return (
        <ClassMainContainer>
            <StudentSideMenuContainer />
            <SpanishClassCard />
        </ClassMainContainer>
    )
}