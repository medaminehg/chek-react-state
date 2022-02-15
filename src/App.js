import React, { Component } from 'react'
import './App.css';
import Img from "./4.jpg"
import Profil from './Profil';
export default class App extends Component {
  state={
    name:"Med Amine ",
    phone :20123456,
    email:"amine.ghozzi1@gmail.com",
    poste:"technicien en informatique",
    shows:false,
    img:Img,
    
  }


  Display = () => {
    this.setState({
      shows: !this.state.shows
      
    })
   
  }

 

  render() {

    return (
      <div className="App">
        
        <button onClick={this.Display}>Profile</button>
        {
       this.state.shows ? <Profil obj={this.state} /> :null 
        }
       
        
      </div>
    )
  }
}
