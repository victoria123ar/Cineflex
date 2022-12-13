import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { cor } from "../cor";

export default function Assento({ lugar, Selecionado, escolherAssento }) {
  const [status, setStatus] = useState("selecionado");
  

  useEffect(() => {
    if (Selecionado) {
      setStatus("selecionado");
    } else if (lugar.isAvailable) {
      setStatus("disponivel");
    } else {
      setStatus("indisponivel");
    }
  }, [Selecionado, lugar]);

  return (
    <Botao data-test='seat' status={status} onClick={() => escolherAssento(lugar)}>
      {lugar.name}
    </Botao>
  );
}

const Botao = styled.button`
  width: 26px;
  height: 26px;

  background-color: ${(props) => cor[props.status].background};
  border: 1px solid ${(props) => cor[props.status].border};
  border-radius: 100%;

  font-family: "Roboto";
  font-size: 11px;
  color: #000000;

  margin: 7px 3.5px;

  cursor: pointer;
`;
