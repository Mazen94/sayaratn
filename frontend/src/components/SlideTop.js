import React from 'react'
import {Carousel} from 'react-bootstrap'
import affiche from '../images/affiche.jpg'
import chauffeur from '../images/affiche-chauffeur.jpg'

function Slide() {
    return (
        <div>
<Carousel className="slide-top">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={affiche}
      alt="First slide"
    />
    <Carousel.Caption style={{color:"black"}}>
      <h3><b>Réserver votre Voiture</b></h3>
      <p><h1>10</h1>% la commission la plus basse du marché</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={chauffeur}
      alt="Second slide"
    />

    <Carousel.Caption style={{color:"black",marginLeft:"0px"}}>
      <h3><b>t'as votre chauffeur pour conduire?</b></h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Slide
