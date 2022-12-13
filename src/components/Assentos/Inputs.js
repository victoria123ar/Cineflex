import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Inputs({ sessao, assentoSelecionado, setSucesso, setSelecionarAssentos }) {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const navigate = useNavigate();

  function comprar(e) {
    e.preventDefault();

    const informacao = {
      filme: sessao.movie.title,
      data: sessao.day.date,
      hora: sessao.name,
      nome: nome,
      cpf: cpf,
      assentos: assentoSelecionado.map((assento) => assento.name),
    };

    const postData = {
      "ids": assentoSelecionado.map((assento) => assento.id),
      "name": nome,
      "cpf": cpf
    }

    axios
      .post(
        "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many",
        postData
      )
      .then((resposta) => {
        setSucesso(informacao)
        navigate("/Sucesso")
        
      })
      .catch((erro) => console.log(`Error: ${erro.message}`))
  }

  return (
    <Form onSubmit={comprar}>
      <Dados>
        <Comprador data-test='client-name'>
          <p>Nome do comprador:</p>
          <input
            name="name"
            value={nome}
            onChange={e => setNome(e.target.value)}
            placeholder="Digite seu nome..."
            type="text"
          />
        </Comprador>
        <CPF data-test='client-cpf'>
          <p>CPF do comprador:</p>
          <input
            name="cpf"
            value={cpf}
            onChange={e => setCpf(e.target.value)}
            placeholder="Digite seu CPF..."
            type="text"
          />
        </CPF>
      </Dados>
      <BotaoReservaContainer>
        <BotaoReserva data-test='book-seat-btn'>Reservar assento(s)</BotaoReserva>
      </BotaoReservaContainer>
    </Form>
  );
}

const Form = styled.form``;

const Dados = styled.div`
  margin-top: 40px;
  margin-left: 25px;
`;

const Comprador = styled.div`
  margin-bottom: 10px;

  p {
    font-family: "Roboto";
    font-size: 18px;
    color: #293845;

    margin-bottom: 2px;
  }

  input {
    width: 305px;
    height: 29px;

    border: 1px solid #d4d4d4;
    border-radius: 3px;

    padding: 10px;

    font-family: "Roboto";
    font-size: 18px;
    color: #293845;
  }

  input::placeholder {
    font-family: "Roboto";
    font-style: Italic;
    font-size: 18px;
    color: #afafaf;
  }
`;

const CPF = styled.div`
  margin-bottom: 70px;

  p {
    font-family: "Roboto";
    font-size: 18px;
    color: #293845;

    margin-bottom: 2px;
  }

  input {
    width: 305px;
    height: 29px;

    border: 1px solid #d4d4d4;
    border-radius: 3px;

    padding: 10px;

    font-family: "Roboto";
    font-size: 18px;
    color: #293845;
  }

  input::placeholder {
    font-family: "Roboto";
    font-style: Italic;
    font-size: 18px;
    color: #afafaf;
  }
`;

const BotaoReservaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BotaoReserva = styled.button`
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
