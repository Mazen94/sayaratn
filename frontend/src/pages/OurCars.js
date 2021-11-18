import React from "react";
import city from "../images/city+backgroundyellow.jpg";
import peugeot from "../images/peugeot-208.png";
import { Col, Container, Form, Row } from "react-bootstrap";
import googleplay from "../images/google-play.png";
import appstore from "../images/appstore.png";
import { Link } from "react-router-dom";
import { GiVibratingSmartphone } from "react-icons/gi";
import q5 from "../images/audi-q5.png"
import q7 from "../images/audi-q7.png"
import sportage from "../images/kia-sportage.png"
import ford from "../images/ford.png"
import passat from "../images/passat.png"
import jetta from "../images/passat-jetta.png"
import i10 from "../images/hyundai-i10.png"
import i20 from "../images/hyundai-i20.png"
import audi from "../images/audi.png"
import Footer from "../Footer/Footer"
import { useState } from 'react';
import CarList from '../components/CarList';
import Filtre from '../components/Filtre';

function OurCars() {

  const [cars,setCars] =useState([
    {
      title :"Ford Ecosport",
      rate : 4.7,
      price :"92 dt",
      img : "https://cdn.wheel-size.com/automobile/body/ford-ecosport-2017-2021-1603711777.3369672.jpg"
    } ,
    {
    title : "Kia Sportage" ,
    rate : 4.2,
    price : "80 dt",
    img : "https://catalogue.automobile.tn/big/2021/02/46530.jpg?t=1633026479"
  } ,
  {
     title :"Passat",
     rate :3.9,
     price :"102 dt",
     img : "https://1.bp.blogspot.com/-UgXtWL4Dfvg/YKj0h6Bn1AI/AAAAAAAAdpM/9i8Y_RD4vB0sezRq7KLSG_Vw0In6QmP5ACLcBGAsYHQ/s1000/volkswagen-passat-gris-argent-sw.jpg"
    },
    {
      title :"Jeta",
      rate :3.9,
      price :"110 dt",
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPy9-7nbpTR6_CuzLItAWarXM-OGGKVDGLbZuqkzdmmJQ7oH5_-ROihGQqZBZYxjoUXig&usqp=CAU"
  } 

  ]) ;
  const [keyword,setKeyword]=useState("");
  const [newRate,setNewRate]=useState(1);
  const search = (text) =>{
    setKeyword(text);
  }
  const setRate =(rate) =>{
    setNewRate(rate);
  }
  const addCar=(car)=>{
    setCars(cars.concat(car));
  }
  return (
    <div>
      <div style={{ backgroundImage: `url(${city})`, width: "100%" }}>
        <div
          style={{
            // display: "flex",
            color: "rgb(253,197,0)",
            // paddingLeft: "510px",
          }}
        >
          <h4 style={{ paddingTop:"20px",paddingLeft:"500px"}}>BOOK YOUR CAR NOW!</h4>
          <h1 style={{ paddingTop:"20px",paddingLeft:"25px"}}>73 330 330</h1>
        </div>
        <img
          style={{ width: "700px", marginLeft: "320px", paddingTop: "330px" }}
          src={audi}
        />
        <div style={{ display: "flex", marginTop: "70px" , paddingLeft:"20px",paddingBottom:"30px",justifyContent:"space-evenly"}}>
          <div>
            <p>Best in city</p>
            <h6>To rent Car Please use the quick reservation form</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              sed aliquet justo. <br/>
              Quisque ut mollis est.
            </p>
            <button
              style={{
                width: "100px",
                height: "45px",
                backgroundColor: "black",
                color: "rgb(253,197,0)",
                border: "none",
              }}
            >
              Button
            </button>
          </div>
          <div style={{ width: "450px" }}>
            <Form style={{ backgroundColor: "black", border: "none" }}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Name"
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    marginBottom: "15px",
                    marginLeft:"10px",
                    marginRight:"5px",
                    width:"430px"
                  }}
                />
                <Form.Control
                  type="text"
                  placeholder="Enter Your Phone (+216)"
                  style={{ backgroundColor: "white", border: "none", marginLeft:"10px",width:"430px" }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Enter Your Message"
                  style={{ backgroundColor: "white", border: "none", marginLeft:"10px",width:"430px" }}
                />
              </Form.Group>
              <button
                style={{
                  backgroundColor: "white",
                  color: "black",
                  border: "none",
                  margin:"10px"
                }}
              >
                Send
              </button>
            </Form>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            backgroundColor: "grey",
          }}
        >
          <div style={{ width: "200px" }}>
            <GiVibratingSmartphone />
          </div>
          <p style={{ color: "white" }}>
            Book and manage trips via our mobile apps.
          </p>
          <Link to="/googleplay" style={{ marginRight: "20px" }}>
            <img src={googleplay} width="150px" />
          </Link>
          <Link to="/playstore">
            <img src={appstore} width="150px" />
          </Link>
        </div>
      </div>
      <div>
        <div>
        {/* <Container>
  <Row>
    <Col><b>Audi Q5</b> <img src={q5} width="300px"/> </Col>
    <Col><b>Audi Q7</b> <img src={q7} width="320px"/></Col>
  </Row>
  <Row>
    <Col><b>Ford Ecosport</b> <img src={ford} width="360px"/></Col>
    <Col><b>Kia Sportage</b> <img src={sportage} width="340px"/> </Col>
  </Row>
  <Row>
    <Col><b>Passat</b> <img src={passat} width="400px"/></Col>
    <Col><b>Jetta</b> <img src={jetta} width="390px"/> </Col>
  </Row>  <Row>
    <Col><b>Hyundai i10</b> <img src={i10} width="380px"/></Col>
    <Col><b>Hyundai i20</b> <img src={i20} width="390px"/> </Col>
  </Row>
</Container> */}
 <CarList
      addCar={addCar}
      cars={cars.filter((car)=> 
      car.rate >= newRate && 
      car.title.toLowerCase().includes(keyword.toLowerCase().trim()))}
      style={{ width:"500px",paddingTop:"50px"}}/>
        </div>
      </div>


      <br/>
      <Footer/>
    </div>
  );
}

export default OurCars;
