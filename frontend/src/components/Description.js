import React from "react";
import {Container, Row,Col} from 'react-bootstrap'
import googleplay from '../images/google-play.png'
import appstore from '../images/appstore.png'
import {Link} from 'react-router-dom'

function Description() {
  return (
    <div className="container">
        <div style={{display:"block",alignItems:"center"}}>
      <p style={{ fontSize: "35px", color: "black" }}>
        <b>L’application mobile SAYARA TN</b>
      </p>

      <hr
        style={{
          backgroundColor: "rgb(253,197,0)",
          width: 60,
          height: 3,
          opacity:"100%"
        }}
      />
      <p>Téléchargez gratuitement l’application pour réserver votre chauffeur sur votre mobile.
Disponible sur iPhone et Android.

</p>
<Container>
  <Row>
    <Col><b style={{ fontSize: "60px", color: "rgb(253,197,0)" }}>1.</b> INSCRIVEZ-VOUS EN QUELQUES INSTANTS</Col>
    <Col><b style={{ fontSize: "60px", color: "rgb(253,197,0)" }}>2.</b> CHOISISSEZ VOTRE VÉHICULE</Col>
    <Col><b style={{ fontSize: "60px", color: "rgb(253,197,0)" }}>3.</b> VALIDEZ VOTRE VOITURE</Col>
  </Row>
</Container>
    </div>
    <div style={{display:"flex",marginLeft:"350px",marginTop:"50px"}}>
    <Link to="/googleplay" style={{marginRight:"20px"}}><img src={googleplay} width="150px"/></Link>
    <Link to="/playstore"><img src={appstore} width="150px"/></Link>   
    </div>
    </div>
  );
}

export default Description;
