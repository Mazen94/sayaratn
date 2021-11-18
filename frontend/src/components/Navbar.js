import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from 'react-router-dom'
import padlock from "../images/padlock.png";
import logo from "../images/sayaratn final yellow.png"
import {useSelector} from 'react-redux'


function Navb(props) {
  const isAuth = useSelector(state=>state.authReducer.isAuth)
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
        <img src={logo} width="150px" />
        <Container className="navbar">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <div>
                <Link to="/home" style={{ color: "black", paddingLeft: "270px" }}><b>HOME</b></Link>
                <Link to="/OurCars" style={{ color: "black", paddingLeft: "10px" }}><b>OUR CARS</b></Link>
                <Link to="/aboutus" style={{ color: "black", paddingLeft: "10px" }}><b>ABOUT US</b></Link>
                <Link to="/contactus" style={{ color: "black", paddingLeft: "10px" }}><b>CONTACT US</b></Link>
                {/* <img
                src={padlock}
                style={{
                  width: 20,
                  height: 20,
                  marginTop: 10,
                  marginLeft: 100,
                  marginRight: 1,
                  color: "7B959E",
                }}
              /> */}
               {!isAuth ? <><Link to="/login" style={{ color: "rgb(253,197,0)", paddingLeft: "310px" }}><b>Login</b></Link>
                <Link to="/register" style={{ color: "rgb(253,197,0)", paddingLeft: "10px" }}><b>Register</b></Link> </>
                : <><Link to='/login' style={{ color: "rgb(253,197,0)", paddingLeft: "310px" }}>LOGOUT</Link>
                <Link to='dashboard'>Dashboard</Link></>}
              </div>
            </Nav>
            <Nav>
 
              {/* {props.isConnected
                ? <button onClick={props.logout} style={{ color: "rgb(253,197,0)" }}><b>LOGOUT</b></button>
                : <Link to="/login" style={{ color: "rgb(253,197,0)" }}><b>SIGN UP / REGISTER</b></Link>
              } */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navb;
