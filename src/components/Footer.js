import React from "react";
import styled from "styled-components";

export default function Footer({ titulo, poster, dia, hora }) {
  return (
    <Rodape data-test='footer'>
      <Imagem>
        <img src={poster} alt={titulo} />
      </Imagem>
      <Texto>
        <p>{titulo}</p>
        {dia && hora && (
          <p>
            {dia} - {hora}
          </p>
        )}
      </Texto>
    </Rodape>
  );
}

const Rodape = styled.div`
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

const Texto = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-family: "Roboto";
    font-size: 26px;
    color: #293845;

    margin-left: 15px;
  }
`;
