import { TeacherCorrectionContainer, MenuContainer } from './styles';
import Logo from '../../assets/images/logo.png'
import { SpanishClassCard } from '../../components/SpanishClassCard'
import { CorrectionCard } from '../../components/TeacherCorrection';


export function TeacherCorrectionMainPage () {
    return (
        <TeacherCorrectionContainer>
            <MenuContainer>
                <img src={Logo}/>
                <h2>Correção de exercícios</h2>
                <p>The Shepherd's Boy and the Wolf</p>
                <p>The Middle - Zedd feat. Maren Morris and Grey </p>
                <p>Exercise I - Grammar</p>
            </MenuContainer>
            <CorrectionCard />
              
        </TeacherCorrectionContainer>
    )
}