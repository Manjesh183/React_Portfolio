import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


// import img1 from "../assets/3.jpg";
// import img2 from "../assets/4.jpg";
import vg from "../assets/2.webp";
import ab from "../assets/currency.jpg";
import ac from "../assets/passGen.jpg";

const Services = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={1000}
      >
        <div id="container">
          {/* <img src={img1} alt="Item1" />
          <p className="legend">Full Stack</p>
        </div>
        <div>
          <img src={img2} alt="Item3" />
          <p className="legend">Peer-to-peer Support</p> */}
          <div className="proj1">
            
            <img src={vg} alt="portfolioImg" />
            <h1>Myportfolio</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic architecto officiis consectetur </p>
            <button><a href="">Demo</a></button>
          </div>

          <div className="proj1">
            
            <img src={ab} style={{"height" : "370px", "width" : "500px"}} alt="Graphics" />
            <h1>Currency Converter</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic architecto officiis consectetur. </p>
            <button><a href="">Demo</a></button>
          </div>

          <div className="proj1" >
          
            <img src={ac} style={{"height" : "370px", "width" : "500px"}} alt="Graphics" />
            <h1>Random Password generator</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic architecto officiis consectetur. </p>
            <button><a href="">Demo</a></button>
          </div>

        </div>
      </Carousel>
    </div>
  );
};

export default Services;
