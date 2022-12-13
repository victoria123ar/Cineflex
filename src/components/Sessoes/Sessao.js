import React from 'react';
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Sessao({filme}){
    return(
         <Horario data-test='movie-day'>
              <p>{filme.weekday} - {filme.date}</p>
              <Botoes>
                {filme.showtimes.map((horario) => (
                <Link to = {`/Assentos${horario.id}`} key={horario.id}>
                <Botao data-test='showtime'>{horario.name}</Botao>
                </Link>))}
              </Botoes>
            </Horario>
    )
}


const Horario = styled.div`
  width: 300px;

  margin-bottom: 30px;

  p {
    font-family: "Roboto";
    font-size: 20px;
    color: #293845;

    margin-bottom: 30px;
  }
`;

const Botoes = styled.div`
`;

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