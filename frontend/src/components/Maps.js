import React from "react";
import maps from "../images/maps.jpg";

function Maps() {
  return (
    <div style={{ backgroundImage: `url(${maps})`}}>
      <div className="container">
        <p style={{marginLeft:"600px"}}>
          <h1 style={{ marginTop:"70px",paddingTop:"80px",color:"black"}}>Accédez à l’application</h1> 
          <hr
        style={{
          color: "black",
          width: 40,
          height: 2,
          opacity:"100%",
        }}
      />
          <h4 style={{paddingBottom:"30px",paddingTop:"20px"}}>Vous utilisez régulièrement des taxis et vous
          avez envie de vous simplifier la vie.</h4>
          <h4 style={{ marginBottom:"100px",paddingBottom:"323px"}}> Soyez l’un des premiers à avoir
          accès à l’application en vous téléchargeant l’application.</h4>
        </p>
      </div>
    </div>
  );
}

export default Maps;
