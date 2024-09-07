import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>
          Save time & <span>work smarter</span> with AI Automation
        </h1>
        <p>
          We help you automate your workflows, automate repetitive tasks, and
          elevate your business.
        </p>
        <a className="cta" href="#">
          Book Your Free Audit Call
        </a>
        <div className="clients">
          <img
            alt="Client 1"
            height="40"
            src="./assets/asset2.jpeg"
            width="40"
          />
          <img
            alt="Client 2"
            height="40"
            src="./assets/asset3.jpeg"
            width="40"
          />
          <img
            alt="Client 3"
            height="40"
            src="./assets/asset4.jpeg"
            width="40"
          />
          <p>
            200+ happy clients! <br /> Join them now
            <a href="#">→</a>
          </p>
          <div className="video-container">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/watch?v=QbFT7EnofZw"
              title="YouTube video player"
              allowfullscreen
              style={{ frameBorder: 0 }}
            />
          </div>
          <div className="logos">
            <h5>Trusted by 40+ worldwide clients</h5>
            <img src="./hero/asset 35.svg" alt="Logo 1" />
            <img src="./hero/asset 36.svg" alt="Logo 2" />
            <img src="./hero/asset 37.svg" alt="Logo 3" />
            <img src="./hero/asset 38.svg" alt="Logo 4" />
            <img src="./hero/asset 39.svg" alt="Logo 5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
