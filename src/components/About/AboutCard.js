import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Aalasyam Sai Varshith </span>
            from <span className="purple"> Khammam, Telangana.</span>
            <br />I am a 3rd year pursuing Bachelors of Computer Science in
            ABV-IIITM Gwalior.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            {/* <li className="about-activity">
              <ImPointRight /> Playing Games
            </li> */}
            <li className="about-activity">
              <ImPointRight /> Participate in Hackathons
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Everything has a flow to happen"{" "}
          </p>
          <footer className="blockquote-footer">sai045</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
