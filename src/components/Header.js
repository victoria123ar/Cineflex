import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Cabecalho>
      <h1>CINEFLEX</h1>
    </Cabecalho>
  );
}

const Cabecalho = styled.div`
  max-width: 375px;
  width: 100%;
  height: 67px;

  color: #e8833a;
  font-size: 34px;
  font-family: "Roboto";

  background-color: #c3cfd9;

  display: flex;
  justify-content: center;
  align-items: center;
`;
