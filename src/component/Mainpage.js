import React from 'react'
import '../App.css'
import {Image} from 'react-bootstrap'
import down from '../fonts/bottom.png'

const MainPage = () =>{
  return (
      <div className= 'mainDiv'>
        <h1 className= 'mainHead'>Let me Introduce Myself </h1>
        <p className= 'mainP'> My name is Feridun Akyol...</p>
        <p className= 'mainP'>Full Stack Web Developer</p>
        <div className="down">
          <a href="#education" >
              <Image src={down} alt="go down" className="downImage"/>
          </a>
        </div>
      </div>
  )
}

export default MainPage