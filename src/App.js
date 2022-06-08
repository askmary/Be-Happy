import React, {useState, useEffect} from "react"
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
  }
`
const Container = styled.section`
  width:100%;
  height:47em;
  background: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  @media(max-width:1000px){
    background:white;
    height:49em;
  }
  @media(max-width:500px){
    background: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
  }
`
const Title = styled.h1`
  font-size:2.5rem;
  color:deeppink;
  @media(max-width:1000px){
    color:#8ec5fc;
  }
  @media(max-width:500px){
   font-size:2rem;
   color:white;
  }
  @media(max-width:392px){
    font-size:1.5rem;
  }
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
 @media(max-width:1000px){
   background: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
  }
  @media(max-width:500px){
    background-image:url("https://i.pinimg.com/originals/d7/d0/93/d7d0938cfa44698b4e16624c8a6e1ad4.jpg");
    width:25em;
    height:30em;
  }
  @media(max-width:392px){
    width:20em;
    height:25em;
  }
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
  @media(max-width:500px){
    width:20em;
    height:20em;
  }
  @media(max-width:392px){
    width:17em;
    height:17em;
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
 @media(max-width:1000px){
    background:white;
    color:#8ec5fc;
    font-weight:900;
    box-shadow:0 8px 32px 0 rgba(31, 38, 135, 0.37);
  }
  @media(max-width:500px){
    background:#CD69C9;
    color:white;
  }
`
export default function App(){
  const [img, setImg] = useState([])
  function Dog(){
    axios.get("https://dog.ceo/api/breeds/image/random").then((prevState) => {
      setImg(prevState.data.message)
    })
  }
  const [text, setText] = useState('Está tendo um dia ruim? :(')
  useEffect(() => {
    setTimeout(() => {
      setText('Clique no botão e mude isso!')
    }, 5000)
  }, [text])
  return(
    <Container>
      <GlobalStyle/>
      <Title>{text}</Title>
      <SubContainer>
        <Img src={img} alt="cachorros lindos"/>
      </SubContainer>
      <Btn onClick={() => {Dog()}}>Seja feliz!</Btn>
    </Container>
  )
}