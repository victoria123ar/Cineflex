import React from 'react';
import Sonic from "../assets/sonic.jfif";
import styled from "styled-components";
import { Link } from "react-router-dom"

export default function Sessoes() {
  return (
    <>
      <main>
        <Titulo>
          <p>Selecione o(s) assento(s)</p>
        </Titulo>
        <Assentos>
          <Assento>
            <Botao>01</Botao>
            <Botao>02</Botao>
            <Botao>03</Botao>
            <Botao>04</Botao>
            <Botao>05</Botao>
            <Botao>06</Botao>
            <Botao>07</Botao>
            <Botao>08</Botao>
            <Botao>09</Botao>
            <Botao>10</Botao>
            <Botao>11</Botao>
            <Botao>12</Botao>
            <Botao>13</Botao>
            <Botao>14</Botao>
            <Botao>15</Botao>
            <Botao>16</Botao>
            <Botao>17</Botao>
            <Botao>18</Botao>
            <Botao>19</Botao>
            <Botao>20</Botao>
            <Botao>21</Botao>
            <Botao>22</Botao>
            <Botao>23</Botao>
            <Botao>24</Botao>
            <Botao>25</Botao>
            <Botao>26</Botao>
            <Botao>27</Botao>
            <Botao>28</Botao>
            <Botao>29</Botao>
            <Botao>30</Botao>
            <Botao>31</Botao>
            <Botao>32</Botao>
            <Botao>33</Botao>
            <Botao>34</Botao>
            <Botao>35</Botao>
            <Botao>36</Botao>
            <Botao>37</Botao>
            <Botao>38</Botao>
            <Botao>39</Botao>
            <Botao>40</Botao>
            <Botao>41</Botao>
            <Botao>42</Botao>
            <Botao>43</Botao>
            <Botao>44</Botao>
            <Botao>45</Botao>
            <Botao>46</Botao>
            <Botao>47</Botao>
            <Botao>48</Botao>
            <Botao>49</Botao>
            <Botao>50</Botao>
          </Assento>
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
        </Assentos>
        <Dados>
          <Comprador>
            <p>Nome do comprador:</p>
            <input placeholder="Digite seu nome..." type="text" />
          </Comprador>
          <CPF>
            <p>CPF do comprador:</p>
            <input placeholder="Digite seu CPF..." type="text" />
          </CPF>
        </Dados>
        <Link to = '/Sucesso'>
        <BotaoReservaContainer>
          <BotaoReserva>Reservar assento(s)</BotaoReserva>
        </BotaoReservaContainer>
        </Link>
      </main>
      <Footer>
        <Imagem>
          <img src={Sonic} alt="Sonic" />
        </Imagem>
        <Texto>
          <p>Sonic 2</p>
          <p>Quinta-feira - 15:00</p>
        </Texto>
      </Footer>
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

const Assentos = styled.div`
  max-width: 375px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Assento = styled.div`
  margin: 10px 20px;
`;

const Botao = styled.button`
  width: 26px;
  height: 26px;

  background-color: #c3cfd9;
  border: 1px solid #808f9d;
  border-radius: 100%;

  font-family: "Roboto";
  font-size: 11px;
  color: #000000;

  margin: 7px 3.5px;

  cursor: pointer;
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
