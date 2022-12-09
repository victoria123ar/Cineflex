import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom"

export default function Sucesso() {
  return (
      <main>
      <TituloCentralizado>
        <Titulo>
          <p>Pedido feito com sucesso!</p>
        </Titulo>
        </TituloCentralizado>
        <Dados>
          <Filme>
            <h4>Filme e sessão</h4>
            <p>Sonic 2</p>
            <p>24/06/2021 15:00</p>
          </Filme>
          <Ingresso>
          <h4>Ingressos</h4>
            <p>Assento 15</p>
            <p>Assento 16</p>
          </Ingresso>
          <Comprador>
          <h4>Comprador</h4>
            <p>Nome: João da Silva Sauro</p>
            <p>CPF: 123.456.789-10</p>
          </Comprador>
        </Dados>
        <Link to = '/'>
        <BotaoHomeContainer>
          <BotaoHome>Voltar pra Home</BotaoHome>
        </BotaoHomeContainer>
        </Link>
      </main>
  );
}

const TituloCentralizado = styled.div`
max-width: 375px;
width: 100%;

display: flex;
flex-direction: column;
align-items: center;
`

const Titulo = styled.div`
  max-width: 150px;
  width: 100%;
  height: 110px;

  color: #247A6B;
  font-size: 24px;
  font-family: "Roboto";
  font-weight: bold;
  word-break: break-word;
  text-align: center;
  line-height: 28px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dados = styled.div`
  max-width: 375px;

  display: flex;
  flex-direction: column;

  margin-left: 30px;
  margin-bottom: 50px;
`;

const Filme = styled.div`
  width: 241px;

  margin-bottom: 30px;

  h4{
    font-family: "Roboto";
    font-size: 24px;
    font-weight: bold;
    color: #293845;

    margin-bottom: 10px;
  }

  p {
    font-family: "Roboto";
    font-size: 20px;
    color: #293845;

    margin-bottom: 5px;
  }
`;

const Ingresso = styled.div`
  width: 241px;

  margin-bottom: 30px;

  h4{
    font-family: "Roboto";
    font-size: 24px;
    font-weight: bold;
    color: #293845;

    margin-bottom: 10px;
  }

  p {
    font-family: "Roboto";
    font-size: 20px;
    color: #293845;

    margin-bottom: 5px;
  }
`;

const Comprador = styled.div`
  width: 241px;

  margin-bottom: 30px;

  h4{
    font-family: "Roboto";
    font-size: 24px;
    font-weight: bold;
    color: #293845;

    margin-bottom: 10px;
  }

  p {
    font-family: "Roboto";
    font-size: 20px;
    color: #293845;

    margin-bottom: 5px;
  }
`;

const BotaoHomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BotaoHome = styled.button`
  width: 225px;
  height: 42px;

  background-color: #e8833a;
  border: none;
  border-radius: 3px;

  font-family: "Roboto";
  font-size: 18px;
  color: #ffffff;

  cursor: pointer;
`;
