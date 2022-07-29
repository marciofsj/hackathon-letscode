import { ClassMainContainer } from './styles';
import { EnglishClassCard } from '../../components/EnglishClassCard'
import { SideMenuContainer } from '../../components/MenuContainer';


export function EnglishClassMainPage () {
    return (
        <ClassMainContainer>
            <SideMenuContainer />
            <EnglishClassCard />
        </ClassMainContainer>
    )
}