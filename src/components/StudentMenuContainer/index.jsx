import { MenuContainer } from './styles';
import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

export function StudentSideMenuContainer () {
    return (
            <MenuContainer>
                <img src={Logo}/>
                <h2>Navegação</h2>
                <p>
                    <Link to="/aluno">Página inicial</Link>
                </p>
                <p>
                    <Link to="/materia-ingles">Inglês</Link>
                </p>
                <p>
                    <Link to="/materia-espanhol">Espanhol</Link>
                </p>
                <h2>Conteúdos e Atividades</h2>
                <p>The Shepherd's Boy and the Wolf</p>
                <p>The Middle - Zedd feat. Maren Morris and Grey </p>
                <p>Exercise I - Grammar</p>
                <p>Los sustantivos</p>
            </MenuContainer>
    )
}