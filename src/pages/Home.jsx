import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import s3 from '../assets/s3.png'
import s2 from '../assets/s2.png'
import s14 from '../assets/s15.png'
import s15 from '../assets/s11.png'
import s6 from '../assets/s6.png'
import s12 from '../assets/s13.png'
import Particle from '../components/Particle';
import About from '../components/Home/About';
import Type from '../components/Home/Type';
import 'animate.css';

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Suad Salad Osman</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              {/* <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px", borderRadius: "50%" }}
              /> */}
               <div class="circular-slider">
    <div class="slider-content">
      <div class="slider-item">
        <img src={s3} alt='' />
      </div>
     
      <div class="slider-item">
        <img src={s14} alt='' />
      </div>
      <div class="slider-item">
        <img src={s12} alt='' />
      </div>
      <div class="slider-item">
        <img src={s2} alt='' />
      </div>
      <div class="slider-item">
        <img src={s15} alt='' />
      </div>
      <div class="slider-item">
        <img src={s6} alt='' />
      </div>
    </div>
  </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
}

export default Home