import React from 'react'
import { Button, Card } from 'react-bootstrap';
import MovisRate from './MovisRate';
import './MovisCard.css'
function MovisCard(props) {
  return (
    <div className="hero-container">
  <div className="main-container">
    <div className="poster-container">
      <a href="#"><img src={props.film.img} className="poster" /></a>
    </div>
    <div className="ticket-container">
      <div className="ticket__content">
        <h4 className="ticket__movie-title">{props.film.name}</h4>
        <p className="ticket__movie-slogan">
          {props.film.prod}
        </p>
        <p className="ticket__current-price"><MovisRate Mrate={props.film.rat}/></p>
        {/* <p className="ticket__old-price">$44.99</p> */}
       <a href={props.film.ann} target="_blank"><button className="ticket__buy-btn">Trailer</button></a> 
      </div>
   
  </div>
</div>
</div>

  )
}

export default MovisCard
