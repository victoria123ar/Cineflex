import React from 'react';
import Sonic from "../assets/sonic.jfif";
import styled from "styled-components";
import { Link } from "react-router-dom"

export default function Sessoes() {
  return (
    <>
      <main>
        <Titulo>
          <p>Selecione o horário</p>
        </Titulo>
        <Horarios>
          <Horario>
            <p>Quinta-feira - 24/06/2021</p>
            <Botoes>
              <Link to = '/Assentos'>
              <Botao>15:00</Botao>
              <Botao>19:00</Botao>
              </Link>
            </Botoes>
          </Horario>
          <Horario>
            <p>Sexta-feira - 25/06/2021</p>
            <Botoes>
            <Link to = '/Assentos'>
              <Botao>15:00</Botao>
              <Botao>19:00</Botao>
              </Link>
            </Botoes>
          </Horario>
        </Horarios>
      </main>
      <Footer>
        <Imagem>
          <img src={Sonic} alt="Sonic" />
        </Imagem>
        <p>Sonic 2</p>
      </Footer>
    </>
  );
}

const Titulo = styled.div`
  max-width: 375px;
  width: 100%;
  height: 110px;

  color: #293845;
  font-size: 24px;
  font-family: "Roboto";

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Horarios = styled.div`
  max-width: 375px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 20px;
`;
const Horario = styled.div`
  width: 241px;

  margin-bottom: 30px;

  p {
    font-family: "Roboto";
    font-size: 20px;
    color: #293845;

    margin-bottom: 30px;
  }
`;

const Botoes = styled.div``;

const Botao = styled.button`
  width: 83px;
  height: 43px;

  background-color: #e8833a;
  border: none;
  border-radius: 3px;

  font-family: "Roboto";
  font-size: 18px;
  color: #ffffff;

  margin-right: 10px;

  cursor: pointer;
`;

const Footer = styled.div`
  max-width: 375px;
  width: 100%;
  height: 117px;

  background-color: #dfe6ed;

  border-top: 1px solid #9eadba;

  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;

  padding-left: 10px;

  p {
    font-family: "Roboto";
    font-size: 26px;
    color: #293845;

    margin-left: 15px;
  }
`;

const Imagem = styled.div`
  width: 64px;
  height: 89px;

  background-color: #ffffff;

  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.15);
  border-radius: 3px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 48px;
    height: 72px;
  }
`;
