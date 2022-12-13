import React from "react";
import Header from "./Header";
import Rota from "../pages/Rota";
import Sessoes from "../pages/Sessoes";
import Assentos from "../pages/Assentos";
import Sucesso from "../pages/Sucesso";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const [sucesso, setSucesso] = useState({});

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Rota />} />
        <Route path="/Sessoes:filmeId" element={<Sessoes />} />
        <Route path="/Assentos:sessaoId" element={<Assentos setSucesso={setSucesso} />}/>
        <Route path="/Sucesso" element={<Sucesso sucesso={sucesso} />} />
      </Routes>
    </BrowserRouter>
  );
}
