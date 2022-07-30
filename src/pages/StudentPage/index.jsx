import { StudentMainContainer, BodyContainer } from './styles';
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
                    ==============
                    <StyledButton onClick={()=>navigate('/materia-ingles')}>
                        <input type="image" src={Uk}/>
                    </StyledButton>
                    <StyledButton onClick={()=>navigate('/materia-espanhol')}>
                        <input type="image" src={Spain}/>
                    </StyledButton>
                    ==============
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