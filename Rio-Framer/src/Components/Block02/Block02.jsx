import React from "react";
import "./Block02.css";

const block02 = () => {
  return (
    <div>
      <div className="container-content2">
        <div className="image-section">
          <img
            alt="AI graphic with circuits and AI text in the center"
            height="300"
            src="./asset 6.png"
            width="300"
          />
        </div>
        <div className="content-section">
          <div className="tag">CONTENT BLOCK</div>
          <h1>Harnessing AI for business success</h1>
          <div className="feature">
            <i className="fas fa-tasks"></i>
            <div className="text">
              <p>Boost efficiency and cut costs with AI-powered automation</p>
            </div>
            <div className="arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
          <div className="feature">
            <i className="fas fa-cogs"></i>
            <div className="text">
              <p>Optimize operations, minimize errors, and save resources</p>
            </div>
            <div className="arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
          <div className="testimonial">
            “Couldn’t be happier with the work the guys from XYZ Agency did for
            us. Made sales 10x more efficient.”
          </div>
          <div className="author">
            <img
              alt="Portrait of William James"
              height="50"
              src="./asset 7.jpeg"
            />
            <div>
              <div className="name">William James</div>
              <div className="position">CEO, XYZ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default block02;
