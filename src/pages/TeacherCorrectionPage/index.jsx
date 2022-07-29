import { TeacherCorrectionContainer } from './styles';
import { CorrectionCard } from '../../components/TeacherCorrection';
import { SideMenuContainer } from '../../components/MenuContainer';


export function TeacherCorrectionMainPage () {
    return (
        <TeacherCorrectionContainer>
            <SideMenuContainer /> 
            <CorrectionCard />
        </TeacherCorrectionContainer>
    )
}