import { ClassMainContainer, MenuContainer } from './styles';
import Logo from '../../assets/images/logo.png'
import { SpanishClassCard } from '../../components/SpanishClassCard'


export function SpanishClassMainPage () {
    return (
        <ClassMainContainer>
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
            <SpanishClassCard />
              
        </ClassMainContainer>
    )
}