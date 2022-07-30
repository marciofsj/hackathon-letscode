import { StudentMainContainer, BodyContainer, StyledButtonB } from './styles';
import { StudentSideMenuContainer } from '../../components/StudentMenuContainer';
import Uk from '../../assets/images/UK.svg';
import Spain from '../../assets/images/Spain.svg';

import { useNavigate } from 'react-router-dom';
import { StyledButton } from '../../styles/styledbutton';

export function StudentMainPage () {
    const navigate = useNavigate()


    return (
        <StudentMainContainer>
            <StudentSideMenuContainer />
            <BodyContainer>
                <h1>OLÁ, ALUNO!</h1>
                <div>
                    <StyledButtonB onClick={()=>navigate('/materia-ingles')}>
                        <input type="image" src={Uk} alt='Bandeira do Reino Unido'/>
                    </StyledButtonB>
                    <StyledButtonB onClick={()=>navigate('/materia-espanhol')}>
                        <input type="image" src={Spain} alt='Bandeira da Espanha'/>
                    </StyledButtonB>
                </div>
                <h3>Recados e avisos</h3>
                <p>
                    1. Leia atentamente o conteúdo a seguir; <br />
                    2. Se precisar, revise as informações, antes de fazer os exercícios; <br />
                    3. Não se preocupe com o tempo, se precisar de ajuda, fale com seu  professor.  <br />
                    4.  Não deixe de conferir o conteúdo extra semanal, ele pode te ajudar muito nas atividades diárias. <br />
                </p>
            </BodyContainer>
        </StudentMainContainer>
    )
}