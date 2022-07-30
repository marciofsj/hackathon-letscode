import { MenuContainer } from './styles';
import Logo from '../../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';

export function StudentSideMenuContainer () {
    const navigate = useNavigate()
    const navi =(path)=> navigate(path)  

    return (
            <MenuContainer>
                <img src={Logo}/>
                <h2>Navegação</h2>
                <div>
                    <button onClick={()=>navi('/aluno')}>
                        Página inicial
                    </button>
                    <button onClick={()=>navi("/materia-ingles")}>
                        Inglês
                    </button>
                    <button onClick={()=>navi("/materia-espanhol")}>
                        Espanhol
                    </button>
                    <button onClick={()=>navi("/")}>
                        sair
                    </button>
                </div>
                
                <h2>Conteúdos e Atividades</h2>
                <p>The Shepherd's Boy and the Wolf</p>
                <p>The Middle - Zedd feat. Maren Morris and Grey </p>
                <p>Exercise I - Grammar</p>
                <p>Los sustantivos</p>
            </MenuContainer>
    )
}