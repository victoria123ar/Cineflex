import React from 'react';
import styled from "styled-components";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom"
import Sessao from "../components/Sessoes/Sessao";

export default function Sessoes() {
  const [filme, setFilme] = useState(undefined)
  const { filmeId } = useParams()

  useEffect(() => {
    axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${filmeId}/showtimes`)
    .then((resposta) => setFilme(resposta.data))
    .catch((erro) => setFilme(erro.data))
  }, [])

console.log(filme)

if (!filme) {
  return <CarregarContainer>
    <Carregar>
    </Carregar>
    <p>Carregando...</p>
    </CarregarContainer>;
}

  return (
    <>
      <main>
        <Titulo>
          <p>Selecione o horário</p>
        </Titulo>
        <Horarios>
        {filme.days.map((dia) => ( <Sessao filme={dia} key={dia.id} />
        ))}
          </Horarios>
      </main>
      <Footer>
        <Imagem>
          <img src={filme.posterURL} alt="{filme.title}" />
        </Imagem>
        <p>{filme.title}</p>
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

const CarregarContainer = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

p{
      color: #e8833a;
      font-family: "Roboto";
      font-size: 16px;
    }
`;

const Carregar = styled.div`
    width: 50px;
    height: 50px;
    border: 6px solid #e5e5e5;
    border-top-color: #e8833a;
    border-radius: 50%;
    animation: rotacao 1s infinite;

    @keyframes rotacao {
      to{
        transform: rotate(1turn)
      }
    }
`;