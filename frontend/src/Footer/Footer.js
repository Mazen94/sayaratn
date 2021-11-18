import React from "react";
import "./Footer.css";
import logo from "../images/sayaratn black.png";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { Link, BrowserRouter as Router } from "react-router-dom";

function Footer() {
  return (
    <Router>
      <div className="main-footer">
        <div className="container">
          <div className="row" style={{color:"black"}}>
            {/* Column1 */}
            <div className="col">
              <img src={logo} width="200px" />
            </div>
            {/* Column2 */}
            <div className="col">
              <h5>Adresse</h5>
              <p>Monastir - Ksar-hellal, Rue Taher Sfar 5070</p>
            </div>
            {/* Column3 */}
            <div className="col">
              <h5>Numéro de téléphone</h5>
              <p>73 330 330</p>
            </div>
          </div>
          <h2 className="list-unstyled" style={{marginLeft:"350px", color:"black"}}>
                <FiFacebook />
                <FiInstagram />
                <FiTwitter />
                <AiOutlineWhatsApp />
              </h2>
          <hr/>
        </div>
      </div>
    </Router>
  );
}

export default Footer;
