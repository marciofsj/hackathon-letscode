import { ClassMainContainer } from './styles';
import { SpanishClassCard } from '../../components/SpanishClassCard';
import { SideMenuContainer } from '../../components/MenuContainer';


export function SpanishClassMainPage () {
    return (
        <ClassMainContainer>
            <SideMenuContainer />
            <SpanishClassCard />
        </ClassMainContainer>
    )
}