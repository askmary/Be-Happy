import React, {useState} from "react"
import styled from "styled-components"
import axios from "axios"
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  body{
    width:100%;
  }
`
const Container = styled.section`
  width:100%;
  background-color:red;
  display:flex;
  flex-direction:column;
  justify-content:space-evenly;
  align-items:center;

`
const SubContainer = styled.div`
 width:30em;
 height:35em;
 background:white;
 box-shadow:0 8px 32px 0 rgba(31, 38, 135, 0.37);
 border: 1px solid rgba(255, 255, 255, 0.18);
 display:flex;
 justify-content:center;
`
const Img = styled.img`
  width:25em;
  height:25em;
  margin-top:3em;
`
const Btn = styled.button`
 border-radius:7px;
 width:10em;
 height:2em;
 font-size:1.5rem;
 cursor:pointer;
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
      <h1>Dia ruim?</h1>
      <SubContainer>
        <Img src={img} alt="cachorros lindos"/>
      </SubContainer>
      <Btn onClick={() => {Dog()}}>Seja feliz!</Btn>
    </Container>
  )
}