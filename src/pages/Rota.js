import React from 'react';
import Sonic from "../assets/sonic.jfif";
import Avengers from "../assets/avengers.jfif";
import styled from "styled-components";
import { Link } from "react-router-dom"

export default function Sessoes() {
  return (
      <main>
        <Titulo>
          <p>Selecione o filme</p>
        </Titulo>
        <Filmes>
          <Link to = '/Sessões'>
          <Filme>
            <div className='selecionado'>
          <img src={Avengers} alt="Avengers" />
          </div>
          </Filme>
          </Link>
          <Link to = '/Sessões'>
          <Filme>
            <div className='filme'>
          <img src={Sonic} alt="Sonic" />
          </div>
          </Filme>
          </Link>
          <Link to = '/Sessões'>
          <Filme>
            <div className='filme'>
          <img src={Avengers} alt="Avengers" />
          </div>
          </Filme>
          </Link>
          <Link to = '/Sessões'>
          <Filme>
          <div className='filme'>
          <img src={Sonic} alt="Sonic" />
          </div>
          </Filme>
          </Link>
          <Link to = '/Sessões'>
          <Filme>
          <div className='filme'>
          <img src={Avengers} alt="Avengers" />
          </div>
          </Filme>
          </Link>
          <Link to = '/Sessões'>
          <Filme>
          <div className='filme'>
          <img src={Sonic} alt="Sonic" />
          </div>
          </Filme>
          </Link>
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
  .filme{
    width: 145px;
  height: 209px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 30px;

  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  }

  .selecionado{
    width: 129px;
    height: 193px;

    display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 30px;

  box-shadow: none;
  border-radius: none;
  }

  img {
    width: 129px;
    height: 193px;
  }

`;
