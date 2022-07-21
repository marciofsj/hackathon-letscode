import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { NewAccount } from "./pages/NewAccount";



export function Router () {
    return(
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/cadastro' element={<NewAccount/>}/>
        </Routes>
    )
}