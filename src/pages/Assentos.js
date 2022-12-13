import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Assento from "../components/Assentos/Assento";
import Inputs from "../components/Assentos/Inputs";
import Footer from "../components/Footer";

export default function Assentos({ setSucesso }) {
  const { sessaoId } = useParams();
  const [sessao, setSessao] = useState(undefined);
  const [assentoSelecionado, setAssentoSelecionado] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessaoId}/seats`
      )
      .then((resposta) => setSessao(resposta.data))
      .catch((erro) => console.log(erro.response.data));
  }, []);

  function escolherAssento(lugar) {
    if (lugar.isAvailable === false) {
      alert("Esse lugar não está disponível");
    } else {
      const Selecionado = assentoSelecionado.some(l => lugar.id === l.id)
      if (Selecionado) {
          const novaSelecao = assentoSelecionado.filter(l => lugar.id !== l.id)
          setAssentoSelecionado(novaSelecao)
      } else {
        setAssentoSelecionado([...assentoSelecionado, lugar])
      }
    }
  }

  if (!sessao) {
    return (
      <CarregarContainer>
        <Carregar></Carregar>
        <p>Carregando...</p>
      </CarregarContainer>
    );
  }

  return (
    <>
      <main>
        <Titulo>
          <p>Selecione o(s) assento(s)</p>
        </Titulo>
        <Lugares>
          <Lugar>
            {sessao.seats.map((lugar) => (
              <Assento
                key={lugar.id}
                lugar={lugar}
                escolherAssento={escolherAssento}
                Selecionado={assentoSelecionado.some(l => lugar.id === l.id)}
              />
            ))}
          </Lugar>
          <Disposicao>
            <Selecionado>
              <div className="cor"></div>
              <p>Selecionado</p>
            </Selecionado>
            <Disponivel>
              <div className="cor"></div>
              <p>Disponível</p>
            </Disponivel>
            <Indisponivel>
              <div className="cor"></div>
              <p>Indisponível</p>
            </Indisponivel>
          </Disposicao>
        </Lugares>
        <Inputs
          sessao={sessao}
          assentoSelecionado={assentoSelecionado}
          setAssentoSelecionado={setAssentoSelecionado}
          setSucesso={setSucesso}
        />
      </main>
      <Footer
        titulo={sessao.movie.title}
        poster={sessao.movie.posterURL}
        dia={sessao.day.weekday}
        hora={sessao.name}
      />
    </>
  );
}

const Titulo = styled.div`
  max-width: 375px;
  width: 100%;
  height: 50px;

  color: #293845;
  font-size: 24px;
  font-family: "Roboto";

  display: flex;
  justify-content: center;
  align-items: flex-end;

  margin-bottom: 5px;
`;

const Lugares = styled.div`
  max-width: 375px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Lugar = styled.div`
  margin: 10px 20px;
`;

const Disposicao = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin: 0 35px;
`;

const Selecionado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .cor {
    width: 25px;
    height: 25px;

    background-color: #1aae9e;
    border: 1px solid #0e7d71;
    border-radius: 100%;
  }

  p {
    font-family: "Roboto";
    font-size: 13px;
    color: #4e5a65;
  }
`;

const Disponivel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .cor {
    width: 25px;
    height: 25px;

    background-color: #c3cfd9;
    border: 1px solid #7b8b99;
    border-radius: 100%;
  }

  p {
    font-family: "Roboto";
    font-size: 13px;
    color: #4e5a65;
  }
`;

const Indisponivel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .cor {
    width: 25px;
    height: 25px;

    background-color: #fbe192;
    border: 1px solid #f7c52b;
    border-radius: 100%;
  }

  p {
    font-family: "Roboto";
    font-size: 13px;
    color: #4e5a65;
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
