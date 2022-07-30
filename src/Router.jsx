import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { NewAccount } from "./pages/NewAccount";
import { NewTeacherAccount } from "./pages/TeacherAccount";
import { NewStudentAccount } from "./pages/StudentAccount";
import { TeacherMainPage } from "./pages/TeacherPage";
import { StudentMainPage } from "./pages/StudentPage";
import { EnglishClassMainPage } from "./pages/EnglishClassPage";
import { SpanishClassMainPage } from "./pages/SpanishClassPage";
import { TeacherCorrectionMainPage } from "./pages/TeacherCorrectionPage";

localStorage.setItem('teachersAccount', JSON.stringify([{"name":"teste","email":"teste@test.com","password":"123a","RG":"1403684421","CPF":"06826716577"}]))
localStorage.setItem('studentsAccount', JSON.stringify([{"email":"teste@test2.com","password":"123a"}]))
localStorage.setItem('teacherContent', JSON.stringify([{"turma":"6","materia":"espanhol","categoria":"exercício","titulo":"342342","conteudo":"<p>43242343242</p>"}]))
localStorage.setItem('teacherExercise', JSON.stringify([{"turma":"8","materia":"inglês","categoria":"conteúdo","titulo":"kdfkjsdf","conteudo":"<p>a casa caiu, parça!</p>"}]))

export function Router () {
    return(
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/novo-cadastro' element={<NewAccount/>}></Route>
            <Route path='/cadastro-professor' element={<NewTeacherAccount/>}/>
            <Route path='/cadastro-aluno' element={<NewStudentAccount/>}></Route>
            <Route path='/professor' element={<TeacherMainPage/>}></Route>
            <Route path='/professor-correcao' element={<TeacherCorrectionMainPage/>}></Route>
            <Route path='/aluno' element={<StudentMainPage/>}></Route>
            <Route path='/materia-ingles' element={<EnglishClassMainPage/>}></Route>
            <Route path='/materia-espanhol' element={<SpanishClassMainPage/>}></Route>
        </Routes>
    )
}