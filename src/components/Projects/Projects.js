import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import HrPortal from "../../Assets/Projects/Hr-Portal.jpg";
import AnimeMerch from "../../Assets/Projects/Anime-Merch.PNG";
import CareAndCure from "../../Assets/Projects/CareAndCure.PNG";
import serverlessOTP from "../../Assets/Projects/serverlessOTP.PNG";
import authentication from '../../Assets/Projects/authentication.png'
import portfolio from '../../Assets/Projects/Portfolio.PNG'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CareAndCure}
              isBlog={false}
              title="Care and Cure"
              description="Care and cure is a web integrated Machine Learning Disease Prediction system is a web application that can predicts 41 diseases using 133 symptoms as input. It uses a combination of supervised learning algorithms to generate a list of possible diseases based on the user input. The interface is user-friendly and accessible on all devices, ensuring data privacy and security."
              ghLink="https://github.com/sai045/Care-and-Cure-24-7"
              demoLink="https://care-and-cure-24-7.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={serverlessOTP}
              isBlog={false}
              title="Serverless OTP System"
              description="The Serverless OTP system is an AngularJS and AWS Lambda, AWS API Gateway web application that generates One Time Passwords (OTPs) for user authentication without a dedicated server. The system is secure, cost-effective, and scalable, with additional security features such as time-limited OTPs, rate limiting, and user verification."
              ghLink="https://github.com/sai045/serverless-otp"
              demoLink="https://serverless-otp.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HrPortal}
              isBlog={false}
              title="Hr Portal"
              description="The HR Portal website is a MERN stack web application designed for companies to manage employee-related activities.Administrators manage employee data, approve leave requests, and generate reports. The website shows a overview of the company's HR data and a responsive design for compatibility with all devices. The portal aims to improve HR processes and enhance the HR experience."
              ghLink="https://github.com/sai045/Anime-Merch"
              demoLink="https://sai045.github.io/Anime-Merch/home.html"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio site"
              description="My Portfolio site built with ReactJS and deployed on Vercel. The site features project pages with descriptions, screenshots, and links to live demos or source code repositories, an about page highlighting my skills, and a resume page with a downloadable resume. The site is designed with a responsive layout, engaging animations, and interactivity to provide an immersive user experience."
              ghLink="https://github.com/sai045/portfolio"
              demoLink="https://portfolio-theta-eight-89.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={authentication}
              isBlog={false}
              title="Login Authentication backend API"
              description="The Login Authentication backend API is a NodeJS and Express web application with MongoDB for database management, providing secure user authentication and authorization. It uses packages such as jsonwebtoken, nodemailer, bcrypt, and googleapis for added functionality, including unique authentication tokens and password recovery via email."
              ghLink="https://github.com/sai045/Login-Authentication"
              demoLink="https://login-authentication-backend.onrender.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AnimeMerch}
              isBlog={false}
              title="Anime Merch Frontend"
              description="The Anime Merch frontend project is a web application that showcases a selection of anime merchandise that fans can browse and purchase. The project is built using HTML, CSS, and JavaScript, with the aim of providing an engaging and user-friendly interface for fans to easily navigate and purchase their favorite anime merchandise."
              ghLink="https://github.com/sai045/Hr-Portal-Team-74"
              demoLink="https://hr-portal-team-74-y1r7.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
