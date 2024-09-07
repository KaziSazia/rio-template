import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div>
      <div className="container">
        <div className="badge">SERVICES</div>
        <div className="title">
          AI-powered <span>automation</span> services
        </div>
        <div className="services">
          <div className="service-card">
            <i className="fas fa-comments"></i>
            <h3>Customer Support Chatbots</h3>
            <p>
              Streamline operations and enhance productivity with AI-driven
              automation.
            </p>
            <a href="#" className="learn-more">
              Learn more <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          <div className="service-card">
            <i className="fas fa-rocket"></i>
            <h3>Workflow Automations</h3>
            <p>
              Cut down on manual labor costs through efficient and precise
              automated processes.
            </p>
            <a href="#" className="learn-more">
              Learn more <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          <div className="service-card">
            <i className="fas fa-database"></i>
            <h3>Chatbots for Internal Use</h3>
            <p>
              Automate tasks to ensure your business operates seamlessly around
              the clock.
            </p>
            <a href="#" className="learn-more">
              Learn more <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          <div className="service-card">
            <i className="fas fa-cogs"></i>
            <h3>Custom GPTs</h3>
            <p>
              Harness the power of AI for in-depth analytics and informed
              decision-making.
            </p>
            <a href="#" className="learn-more">
              Learn more <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
