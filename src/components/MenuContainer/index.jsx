import { MenuContainer } from './styles';
import Logo from '../../assets/images/logo.png';

export function SideMenuContainer () {
    return (
            <MenuContainer>
                <img src={Logo}/>
                <h2>Conteúdos e Atividades</h2>
                <p>The Shepherd's Boy and the Wolf</p>
                <p>The Middle - Zedd feat. Maren Morris and Grey </p>
                <p>Exercise I - Grammar</p>
                <p>Los sustantivos</p>
            </MenuContainer>
    )
}