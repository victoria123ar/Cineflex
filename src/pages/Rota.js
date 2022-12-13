import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Rota() {
  const [filmes, setFilmes] = useState(undefined);

  useEffect(() => {
    axios
      .get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
      .then((resposta) => setFilmes(resposta.data))
      .catch((erro) => setFilmes(erro.data));
  }, []);

  if (!filmes) {
    return (
      <CarregarContainer>
        <Carregar></Carregar>
        <p>Carregando...</p>
      </CarregarContainer>
    );
  }

  return (
    <main>
      <Titulo>
        <p>Selecione o filme</p>
      </Titulo>
      <Filmes>
        {filmes.map((filme) => (
          <Filme data-test='movie' key={filme.id}>
            <Link to={`/Sessoes${filme.id}`}>
              <img src={filme.posterURL} alt={filme.title} />
            </Link>
          </Filme>
        ))}
      </Filmes>
    </main>
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

const Filmes = styled.div`
  max-width: 375px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;

  margin-left: 30px;
`;

const Filme = styled.div`
  width: 145px;
  height: 209px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 30px;

  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.15);
  border-radius: 3px;

  img {
    width: 129px;
    height: 193px;
  }
`;

const CarregarContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
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
    to {
      transform: rotate(1turn);
    }
  }
`;
