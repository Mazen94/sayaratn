import React from "react";
import "./aboutus.css"
import city from "../images/city.jpg";
import localisation from "../images/icone-loacalisation.png";
import home from "../images/icon-home.png";
import dollar from "../images/icon-dollar.png";
import run from "../images/icon-run.png";
import taxi from "../images/taxi.png"
import economy from "../images/car-grey.png"
import business from "../images/car-black.png"
import Footer from "../Footer/Footer"
import Navbar from "../components/Navbar"




function AboutUs() {
  return (
    <div>
      
      <div style={{ backgroundImage: `url(${city})`, width: "100%" }}>
        <div className="container">
          <div style={{ color: "rgb(253,197,0)", marginLeft: "550px" }}>
            <p>We are the Best</p>
            <p>What You Wish</p>
            {/* <h1>ايجا نفرحو بيك</h1> */}
          </div>  


          <div className="icones" >  
          <div>
            <div >
              <div style={{ display: "flex" }}>
                <img src={localisation} />
                <p
                  style={{
                    color: "rgb(253,197,0)",
                    paddingTop: "40px",
                    paddingLeft: "20px",
                  }}
                >
                  GPS searching
                </p>
              </div>
              <p
                style={{ color: "white", width: "400px", paddingLeft: "100px" }}
              >
                Mauris porta, nisi a porttitor varius, ipsum lorem condimentum
                leo, laoreet faucibus nisl nunc finibus felis. Integer in sapien
                pulvinar, placerat ante ac, imperdiet ante.{" "}
              </p>
            </div>
            <div style={{ marginLeft: "700px" }}>
              <div style={{ display: "flex" }}>
                <img src={home} />
                <p
                  style={{
                    color: "rgb(253,197,0)",
                    paddingTop: "40px",
                    paddingLeft: "20px",
                  }}
                >
                  Home pickup
                </p>
              </div>
              <p
                style={{ color: "white", width: "400px", paddingLeft: "100px" }}
              >
                Mauris porta, nisi a porttitor varius, ipsum lorem condimentum
                leo, laoreet faucibus nisl nunc finibus felis. Integer in sapien
                pulvinar, placerat ante ac, imperdiet ante.{" "}
              </p>
            </div>
          </div>
          <div>
            <div style={{ display: "flex" }}>
              <img src={dollar} />
              <p
                style={{
                  color: "rgb(253,197,0)",
                  paddingTop: "40px",
                  paddingLeft: "20px",
                }}
              >
                Bonuses For Ride
              </p>
            </div>
            <p style={{ color: "white", width: "400px", paddingLeft: "100px" }}>
              Mauris porta, nisi a porttitor varius, ipsum lorem condimentum
              leo, laoreet faucibus nisl nunc finibus felis. Integer in sapien
              pulvinar, placerat ante ac, imperdiet ante.{" "}
            </p>
            <div style={{ marginLeft: "700px" }}>
              <div style={{ display: "flex" }}>
                <img src={run} />
                <p
                  style={{
                    color: "rgb(253,197,0)",
                    paddingTop: "40px",
                    paddingLeft: "20px",
                  }}
                >
                  Fast Booking
                </p>
              </div>
              <p
                style={{ color: "white", width: "400px", paddingLeft: "100px" }}
              >
                Mauris porta, nisi a porttitor varius, ipsum lorem condimentum
                leo, laoreet faucibus nisl nunc finibus felis. Integer in sapien
                pulvinar, placerat ante ac, imperdiet ante.{" "}
              </p>
            </div>
            </div>
        
          </div>
        </div>
      </div>
      <div className="container">
        <div>
          {/* <b>Taxi</b>
          <b>Economy+</b>
          <b>Business Class</b> */}
          <div style={{display:"flex",justifyContent:"space-between"}}>
          <img src={taxi}/>
          <img src={economy}/>
          <img src={business}/>
          </div>
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <div>
              <h5>Your Taxi Driver</h5>
          <ul>
            <li>
              price based on taximeter
            </li>
            <li>
            Executed by local taxi fleets
            </li>
            <li>
            Online and offline payment
            </li>
            <li>
            24/7 support hotline
            </li>
          </ul>
        </div>
        <div>
          <h5>For budget travelers</h5>
          <ul>
            <li>
            Fixed price
            </li>
            <li>
            English-speaking driver
            </li>
            <li>
            Automated flight and train tracking
            </li>
            <li>
            45 minutes waiting time after landing
            </li>
            <li>
            Pickup with name sign in arrivals hall
            </li>
            <li>
            Children seats available on request
            </li>
            <li>
            Online and offline payment
            </li>
            <li>
            24/7 support hotline
            </li>
          </ul>
        </div>
        <div>
          <h5>Business traveler's favourite</h5>
          <ul>
            <li>
            Black car guaranteed
            </li>
            <li>
            Fixed price
            </li>
            <li>
            English-speaking driver
            </li>
            <li>
            Automated flight and train tracking
            </li>
            <li>
            45 minutes waiting time after landing
            </li>
            <li>
            Pickup with name sign in arrivals hall
            </li>
            <li>
            Children seats available on request
            </li>
            <li>
            Online and offline payment
            </li>
            <li>
            24/7 support hotline
            </li>
          </ul>
          </div>
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default AboutUs;
