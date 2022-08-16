import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Header from "../../components/header";
import Logo from "./../../assets/imgs/logo.png";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

function Home() {
  const [status, setStatus] = useState(false);
  const [userName, setUserName] = useState("");
  const [testimonials, setTestimonials] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userNameLocalStorage = localStorage.getItem("name");

    if (userNameLocalStorage) {
      const unserializedName = JSON.parse(userNameLocalStorage);
      setUserName(unserializedName);
      setStatus(true);
    }
  }, []);

  useEffect(() => {
    const promise = axios.get("http://localhost:5000/depositions");

    promise.then((response) => {
      const { data } = response;
      setTestimonials(data);
    });
    promise.catch((err) => console.log(err.response));
  }, []);

  return (
    <>
      <Header />
      <Main>
        <DivUp>
          <img src={Logo} alt="Logo" />
          <h1>Venha fazer sua tattoo com quem ama a arte!</h1>
          <Button onClick={() => navigate("/schedule")} type="submit">
            Faça um orçamento!
          </Button>
        </DivUp>
        <Banner />
        <Div />
        <h1>Depoimentos</h1>
        <DivDepositions>
          <Depositions>
            <DivStars>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </DivStars>
            <p>"Sessão inesquecível"</p>
            <h1> - Leonardo</h1>
          </Depositions>
          <Depositions>
            <DivStars>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </DivStars>
            <p>"Sessão inesquecível, muito boa mesmo"</p>
            <h1> - Leonardo</h1>
          </Depositions>
          <Depositions>
            <DivStars>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </DivStars>
            <p>
              "Sessão inesquecível, meudeus melhor tatuadora que eu vi na minha
              vida sério amei"
            </p>
            <h1> - Leonardo</h1>
          </Depositions>
        </DivDepositions>
        {status === false ? (
          <></>
        ) : (
          <>
            <Comment>Escreva um comentário</Comment>
          </>
        )}
        <Div />
        <More>
          <Box>
            <h1>Contato</h1>
            <button>Enviar Mensagem</button>
            <p>(21) 98169-8136</p>
          </Box>
          <Box>
            <h1>Endereço</h1>
            <button>Ver Rotas</button>
            <p>R. Nossa Senhora das Mercês 185 - apto 812 - Fonseca</p>
            <p>Rio de Janeiro - RJ</p>
            <p>24130-050</p>
          </Box>
          <Box>
            <h1>Horário de Funcionamento</h1>
            <p>seg.: 08:00 - 18:00</p>
            <p>ter.: 08:00 - 18:00</p>
            <p>qua.: 08:00 - 18:00</p>
            <p>qui.: 08:00 - 18:00</p>
            <p>sex.: 08:00 - 18:00</p>
            <p>sab.: 10:00 - 17:00</p>
            <p>dom.: 10:00 - 14:00</p>
          </Box>
        </More>
      </Main>
    </>
  );
}

export default Home;

export const Main = styled.main`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  margin-bottom: 80px;
  margin-right: 50px;

  img {
    width: 80px;
    height: 80px;
    margin-top: 10px;
  }
  h1 {
    font-family: oswald;
    font-size: 22px;
  }
`;

const Button = styled.button`
  color: #ffffff;
  background-color: #4a4a59;
  border: none;
  width: 429px;
  height: 65px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 27px;
  font-family: oswald;
  cursor: pointer;
  margin-top: 30px;
`;

const Banner = styled.div`
  width: 820px;
  height: 420px;
  border: solid 5px #000000;
  border-radius: 6px;
  background-color: #ffffff;
  cursor: pointer;
  margin-top: 50px;
  margin-bottom: 100px;
`;

const DivUp = styled.div`
  width: 620px;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 40px;
  background-color: #ffffff;
  margin-top: 30px;

  h1 {
    font-family: oswald;
    font-size: 22px;
    margin-top: 5px;
  }
`;

export const Div = styled.div`
  width: 50px;
  height: 2px;
  border-radius: 5px;
  background-color: #000000;
  margin-top: 50px;
`;

export const Comment = styled.p`
  font-family: "Open Sans", sans-serif;
  color: blue;
  font-size: 16px;
  text-decoration: underline;
  margin-top: -50px;
  margin-bottom: 50px;
`;

export const DivDepositions = styled.div`
  width: 940px;
  height: 220px;
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-left: 40px;
`;

export const Depositions = styled.div`
  width: 310px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 2px;

  p {
    font-size: 14px;
    margin-top: 25px;
    line-height: 18px;
  }
  h1 {
    color: #4a4a59;
    font-family: oswald;
    font-size: 16px;
    margin-top: 25px;
  }
`;

export const DivStars = styled.div`
  width: 300px;
  height: 20px;
  display: flex;
  align-items: center;
  margin-left: 5px;
`;

const Star = styled(AiFillStar)`
  color: #fbbc2a;
  font-size: 18px;
  margin: 0 2px;
`;

export const More = styled.div`
  width: 820px;
  height: 210px;
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-left: 40px;
`;

export const Box = styled.div`
  width: 240px;
  height: 210px;
  display: flex;
  flex-direction: column;
  margin-left: 30px;

  h1 {
    font-family: oswald;
    font-size: 20px;
    margin-top: 5px;
  }
  button {
    color: #ffffff;
    background-color: #4a4a59;
    border: none;
    width: 129px;
    height: 35px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-family: oswald;
    cursor: pointer;
    margin-top: 20px;
  }
  p {
    font-size: 14px;
    margin-top: 10px;
    line-height: 18px;
  }
`;
