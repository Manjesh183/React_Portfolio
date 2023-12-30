import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Hi,There!</h1>
          <h2>I'M MANJESH KR. SINGH</h2>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            I fell in love with programming and I have at least learnt something, I think…😅 <br />
            I am fluent in classics like HTML,CSS,Javascript and React.<br />
            Whenever possible, I also apply my passion for developing web Application with HTML,CSS and Modern Javascript Library and Frameworks like React.js
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Know Who I'M</h1>
          <p>
            Hi Everyone, I am Manjesh Kr. Singh from Ghaziabad, India.<br />
            I am currently employed as a Frontend developer at TCS.
            I have completed BTech. in Information Technology at STCET,Kolkata.<br />

            My Primary Skills are:--<br />
            </p>
            <h3>HTML</h3><br />
            <h3>CSS</h3><br />
            <h3>JavaScript</h3><br />
            <h3>ReactJS</h3><br />
           


          
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>FIND ME ON</h1>
          <p style={{ color: "white" }}>Feel free to connect with me</p>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <a
                href="https://github.com/Manjesh183"
                target="_blank"
                rel="noreferrer"

              >
                <AiFillGithub />
              </a>
              <p>Github</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <a
                href="https://www.linkedin.com/in/manjesh-kumar-singh-78477a201/"
                target="_blank"
                rel="noreferrer"

              >
                <AiFillLinkedin />
              </a>
              <p>LinkedIn</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              
              <a
                href="https://www.facebook.com/manjesh.raj.779/"
                target="_blank"
                rel="noreferrer"
              >
                 <AiFillFacebook />
              </a>
              
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <a
                href="https://www.instagram.com/psychic_manjesh/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillInstagram />
              </a>
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>


    </>
  );
};

export default Home;
