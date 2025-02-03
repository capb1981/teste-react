import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { Sobre } from "../pages/Sobre"
import { Home } from "../pages/Home"
import { Estudando } from "../pages/Estudando"

import { Entrar } from "../desafio02/Entrar"
import { Form } from "../desafio02/Form"
import { Grupo } from "../classes/Grupo"
import { Desafio03 } from "../desafio03/Desafio03"
import { Lista } from "../desafio04/Lista"
import { ListaFor } from "../desafio04/ListaFor"
import { Desafio05 } from "../desafio05/Desafio05"
import { Desafio06 } from "../desafio06/Desafio06"
import { Nav } from "../desafio07/Nav"
import { Desafio08 } from "../desafio08/Desafio08"
import { Teste01 } from "../testes/Teste01"
import { Tela } from "../desafio09/Tela"
import { Gabarito } from "../desafio09/Gabarito"


export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/sobre" element={<Sobre />}></Route>
                <Route path="/estudando" element={<Estudando />}></Route>
                <Route path="/entrar" element={<Entrar />}></Route>
                <Route path="/form" element={<Form />}></Route>
                <Route path="/grupo" element={<Grupo />}></Route>
                <Route path="/listaFor" element={<ListaFor />}></Route>
                <Route path="/teste01" element={<Teste01 />}></Route>
                <Route path="/desafio03" element={<Desafio03 />}></Route>
                <Route path="/desafio04" element={<Lista />}></Route>
                <Route path="/desafio05" element={<Desafio05 />}></Route>
                <Route path="/desafio06" element={<Desafio06 />}></Route>
                <Route path="/desafio07" element={<Nav />}></Route>
                <Route path="/desafio08" element={<Desafio08 />}></Route>

                <Route path="/quiz" element={<Tela />}></Route>
                <Route path="/gabarito" element={<Gabarito />}></Route>

            </Routes>
        </BrowserRouter>
    )
}