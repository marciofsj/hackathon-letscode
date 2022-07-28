import { ClassMainContainer, MenuContainer } from './styles';
import Logo from '../../assets/images/logo.png'
import { SpanishClassCard } from '../../components/SpanishClassCard'


export function SpanishClassMainPage () {
    return (
        <ClassMainContainer>
            <MenuContainer>
                <img src={Logo}/>
                <h2>Atividades em aberto</h2>
                <p>The Shepherd's Boy and the Wolf</p>
                <p>The Middle - Zedd feat. Maren Morris and Grey </p>
                <p>Exercise I - Grammar</p>
            </MenuContainer>
            <SpanishClassCard />
              
        </ClassMainContainer>
    )
}