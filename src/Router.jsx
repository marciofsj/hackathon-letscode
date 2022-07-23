import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { NewAccount } from "./pages/NewAccount";
import { NewTeacherAccount } from "./pages/TeacherAccount";
import { NewStudentAccount } from "./pages/StudentAccount";
import { TeacherMainPage } from "./pages/TeacherPage";




export function Router () {
    return(
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/novo-cadastro' element={<NewAccount/>}></Route>
            <Route path='/cadastro-professor' element={<NewTeacherAccount/>}/>
            <Route path='/cadastro-aluno' element={<NewStudentAccount/>}></Route>
            <Route path='/professor' element={<TeacherMainPage/>}></Route>
        </Routes>
    )
}