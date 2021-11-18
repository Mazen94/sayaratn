import React from "react";
import { Card } from "react-bootstrap";
import vito from "../images/MERCEDES-BENZ_Vito.jpg";
import affiche from "../images/chauffeur.jpg";
import free from "../images/free.png";

function CardCar() {


  return (
    <div className="box" style={{ marginTop: "80px" }}>
      <Card className="box1" style={{ width: "22rem" }}>
        <Card.Body>
          <img className="d-block w-100" src={affiche} />
          <Card.Title style={{ marginLeft: "60px" }}>SUIVI EN TEMPS RÉEL</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        </Card.Body>
      </Card>
      <Card className="box2" style={{ width: "22rem" }}>
        <Card.Body>
          <img className="d-block w-100" src={vito} />
          <Card.Title style={{ marginLeft: "60px" }}>Mercedes-Benz V-Class</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        </Card.Body>
      </Card>
      <Card className="box3" style={{ width: "22rem" }}>
        <Card.Body>
          <img className="d-block w-100" src={free} />
          <Card.Title style={{ marginLeft: "120px" }}>GRATUIT</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardCar;
