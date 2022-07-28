import { TeacherCorrectionContainer, MenuContainer } from './styles';
import Logo from '../../assets/images/logo.png'
import { SpanishClassCard } from '../../components/SpanishClassCard'
import { CorrectionCard } from '../../components/TeacherCorrection';


export function TeacherCorrectionMainPage () {
    return (
        <TeacherCorrectionContainer>
            <MenuContainer>
                <img src={Logo}/>
                <h2>Página de correção de exercícios</h2>
                <p>La actividad doble</p>
                <p>Exercición tien</p>
                <p>Hello World</p>
                <p>Hello World</p>
                <p>Hello World</p>
            </MenuContainer>
            <CorrectionCard />
              
        </TeacherCorrectionContainer>
    )
}