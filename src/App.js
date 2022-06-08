import React, {useState} from "react"
import styled from "styled-components"
import axios from "axios"
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Varela Round', sans-serif;
  }
  body{
    width:100%;
    max-width:1900px;
    margin: 0 auto;
    background: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
  }
`
const Container = styled.section`
  width:100%;
  height:46em;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;

`
const Title = styled.h1`
  font-size:2.5rem;
  color:deeppink;
`
const SubContainer = styled.div`
 width:30em;
 height:35em;
 background:white;
 box-shadow:0 8px 32px 0 rgba(31, 38, 135, 0.37);
 border: 1px solid rgba(255, 255, 255, 0.18);
 display:flex;
 justify-content:center;
 overflow:hidden;
`
const Img = styled.img`
  width:25em;
  height:25em;
  margin-top:3em;
  transition: 1s all;
  &:hover{
    transform:scale(1.1);
    border-radius:5px;
  }
`
const Btn = styled.button`
 border-radius:7px;
 color:white;
 border:none;
 width:10em;
 height:2em;
 font-size:1.5rem;
 cursor:pointer;
 transition:1s all;
 background: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);
 &:hover{
   transform:scale(1.1);
 }
`
export default function App(){
  const [img, setImg] = useState([])
  function Dog(){
    axios.get("https://dog.ceo/api/breeds/image/random").then((prevState) => {
      setImg(prevState.data.message)
    })
  }
  return(
    <Container>
      <GlobalStyle/>
      <Title> Está tendo um dia ruim? :(</Title>
      <SubContainer>
        <Img src={img} alt="cachorros lindos"/>
      </SubContainer>
      <Btn onClick={() => {Dog()}}>Seja feliz!</Btn>
    </Container>
  )
}