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
                <h1>OLÁ, ALUNO!</h1>
                {/* <img type='button' src={Uk} alt='Bandeira do Reino Unido'/>
                <img type='button' src={Spain} alt='Bandeira da Espanha'/> */}
                <div>
                    {/* <form action="https://google.com">
                        <input type="submit" value="Go to Google" />
                    </form> */}
                    <form action='/materia-ingles'>
                        <input type="image" src={Uk}/>
                    </form>
                    <form action='/materia-espanhol'>
                        <input type="image" src={Spain}/>
                    </form>
                </div>
                <h3>Recados e avisos</h3>
                <p>
                    1. Leia atentamente o conteúdo a seguir; <br />
                    2. Se precisar, revise as informações, antes de fazer os exercícios; <br />
                    3. Não se preocupe com o tempo, se precisar de ajuda, fale com seu  professor.  <br />
                    4.  Não deixe de conferir o conteúdo extra semanal, ele pode te ajudar muito nas atividades diárias. <br />
                    5. Separe pelo menos 30min do seu dia para estudar com a gente! <br />
                </p>
            </BodyContainer>
        </StudentMainContainer>
    )
}