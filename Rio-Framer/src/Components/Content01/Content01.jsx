import React from "react";
import "./Content01.css";

const Content01 = () => {
  return (
    <div>
      <div className="container-content01">
        <div className="content">
          <div className="content01-badge">CONTENT BLOCK</div>
          <h1>
            Workflows with our AI automation
            <span>expertise</span>
          </h1>
          <p>
            Revolutionize tasks, reduce errors, and boost efficiency with
            intelligent technology, streamlining operations for unparalleled
            productivity.
          </p>
          <ul>
            <li>
              <i className="fas fa-check-circle"></i>
              Functional sections
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              Easy to customize
            </li>
          </ul>
          <a className="button" href="#">
            Book Your Free Audit Call
          </a>
        </div>
        <div className="image-container">
          <img
            alt="Graph showing AI automation efficiency over time"
            height="400"
            src="/asset 5.png"
          />
          <div className="background-shape"></div>
        </div>
      </div>
    </div>
  );
};

export default Content01;
