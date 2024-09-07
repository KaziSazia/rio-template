import React from "react";
import "./Process.css";

const Process = () => {
  return (
    <div>
      <div className="container-process">
        <div className="Content-process">
          <div className="badge-process">PROCESS</div>
          <div className="title">How to get started</div>
          <p>
            Unleash the power of AI automation to transform routine processes,
            ensuring precision, 24/7 availability, and significant cost savings.
          </p>
          <a className="button" href="#">
            Book Your Free Audit Call
          </a>
        </div>

        <div className="services-process">
          <div className="service-card">
            <i className="fas fa-comments"></i>
            <h3>01. Book a discovery call</h3>
            <p>
              Book your free discovery call by clicking one of the buttons on
              this page.
            </p>
            <a href="#" className="learn-more">
              Get Started
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          <div className="service-card">
            <i className="fas fa-rocket"></i>
            <h3>02. Get a personal growth strategy</h3>
            <p>
              On this call, we'll assess your business and start working on your
              personal growth strategy.
            </p>
            {/* <a href="#" className="learn-more">
              Learn more <i className="fas fa-arrow-right"></i>
            </a> */}
          </div>
          <div className="service-card">
            <i className="fas fa-database"></i>
            <h3> 03. Onboarding</h3>
            <p>
              After the strategy is complete, we will onboard you onto our
              softwares to ensure a smooth process.
            </p>
            {/* <a href="#" className="learn-more">
              Learn more <i className="fas fa-arrow-right"></i>
            </a> */}
          </div>
          <div className="service-card">
            <i className="fas fa-cogs"></i>
            <h3> 04. Implementation & results</h3>
            <p>
              And finally, we get to implementing the growth strategy and
              working to see results.
            </p>
            <a href="#" className="learn-more">
              Get Started <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
