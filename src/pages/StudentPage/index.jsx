import { StudentMainContainer, BodyContainer, MenuContainer } from './styles';
import Logo from '../../assets/images/logo.png';
import Uk from '../../assets/images/UK.svg';
import Spain from '../../assets/images/Spain.svg'

export function StudentMainPage () {
    return (
        <StudentMainContainer>
            <MenuContainer>
                <img src={Logo}/>
                <h2>Atividades em aberto</h2>
                <p>Conteúdo Espanhol</p>
                <p>Atividade de Inglês</p>
            </MenuContainer>
            <BodyContainer>
                <h1>Olá, Aluno!</h1>
                {/* <img type='button' src={Uk} alt='Bandeira do Reino Unido'/>
                <img type='button' src={Spain} alt='Bandeira da Espanha'/> */}
                <div>
                    {/* <form action="https://google.com">
                        <input type="submit" value="Go to Google" />
                    </form> */}
                    <form action='/'>
                        <input type="image" src={Uk}/>
                    </form>
                    <form action='/'>
                        <input type="image" src={Spain}/>
                    </form>
                </div>
                <h3>Recados e avisos</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus natus alias enim numquam maxime voluptatem earum, sapiente animi quae qui sequi dolorem vitae perspiciatis ullam nisi, ut harum in sint!</p>
            </BodyContainer>
        </StudentMainContainer>
    )
}