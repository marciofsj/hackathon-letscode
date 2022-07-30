import { TeacherCorrectionContainer } from './styles';
import { CorrectionCard } from '../../components/TeacherCorrection';
import { TeacherSideMenuContainer } from '../../components/TeacherMenuContainer';


export function TeacherCorrectionMainPage () {
    return (
        <TeacherCorrectionContainer>
            <TeacherSideMenuContainer/> 
            <CorrectionCard />
        </TeacherCorrectionContainer>
    )
}