import React from 'react';
import Header from './components/Header';
import Rota from './pages/Rota';
import Sessões from './pages/Sessões';
import Assentos from './pages/Assentos';
import Sucesso from './pages/Sucesso';
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom"

export default function App() {
  return(
    <BrowserRouter>
    < Header/>
    <Routes>
      <Route path="/" element={<Rota />}/>
      <Route path="/Sessões" element={<Sessões />}/>
      <Route path="/Assentos" element={<Assentos/>}/>
      <Route path="/Sucesso" element={<Sucesso/>}/>
    </Routes>
    <GlobalStyle />
  </BrowserRouter>
  )
}