
import React from "react";
import aniket from "./Aniket.jpg";
import "./about.css";

const About =()=> {
  let message ="";
  return (
    <section class="section-white">
      <div className="custom-container">
        <div className="custom-row">
          <div  className="custom-col-md-12 custom-text-center">
            <h2 class="section-title">About Me</h2>

            <p class="section-subtitle">{message}</p>
          </div>
          <div className="custom-col-sm-6 custom-col-md-4">
            <div class="team-item">
              <img
                src= {aniket}
                class="team-img"
                alt="pic"
              />

              <h3>Aniket Kumar</h3>

              <div class="team-info">
                <p>Developer</p>
              </div>

              <p>
              Hey , I am Aniket Kumar ! Currently I am a final year student at IIT Guwahati pursuing Electrical 
                and Electronics Engineering.
              </p>
              <p> </p>
              <p>Mob no: 7099539869</p>
              <p>Email Id: chourasiaaniket96@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
