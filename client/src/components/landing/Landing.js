import React from 'react';
import { Parallax, Background } from 'react-parallax';
import { Button, Col, Grid, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import seminars from './images/seminars.png';
import register from './images/register.png';
import faq from './images/faq.png';
import hair_strokes from './images/hair_strokes.jpg';
import powders from './images/powders.jpg';
import lips from './images/lips.jpg';
import eyeliners from './images/eyeliners.jpg';

import './Landing.css';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <div id="top_headline">
        <h2>
          Microblading The #1 Beauty Trends In 2017 - SELF
        </h2>
        <h4>
          It's never too late to learn something New!
        </h4>
      </div>
      <div className="parallax">
        <Parallax strength={500}>
          <Background>
            <img id="parallax_img" src={hair_strokes} alt="hair_strokes"/>
          </Background>
          <div className="parallax_body">
            <h1>Hair Strokes</h1>
            <h3>Permanent Makeup</h3>
            <div className="section_text">
              <p>The Hair Strokes Technique is often considered a type of permanent makeup, however, its concept is different: the ink is deposited with manual pen with blade which is 2 times thinner than average human hair and that allows technicians to draw crisp, thin and natural looking hairs.</p>
            </div>
            <div className="section_footer">
              <LinkContainer to={'/seminars/hair_strokes'}>
                <Button>
                  Get More Info
                </Button>
              </LinkContainer>
            </div>
          </div>
        </Parallax>
      </div>

      <div className="parallax">
        <Parallax strength={500}>
          <Background>
            <img id="parallax_img" src={powders} alt="hair_strokes"/>
          </Background>
          <div className="parallax_body">
            <h1>Powdered</h1>
            <h3>Permanent Makeup</h3>
            <div className="section_text">
              <p>he Powdered fill method involves the application of thousands of tiny little dots of pigment, inserted into the skin, gradually building up a colour and a defined shape. Hair Strokes method can be done on top of the Powered method for definitions.</p>
            </div>
            <div className="section_footer">
              <LinkContainer to={'/seminars/powdered'}>
                <Button>
                  Get More Info
                </Button>
              </LinkContainer>
            </div>
          </div>
        </Parallax>
      </div>

      <div className="parallax">
        <Parallax strength={500}>
          <Background>
            <img id="parallax_img" src={lips} alt="hair_strokes"/>
          </Background>
          <div className="parallax_body">
            <h1>Lips</h1>
            <h3>Permanent Makeup</h3>
            <div className="section_text">
              <p>The Lip tattoos are designed to define lips, not to create volume or puffiness, it will give you the appearance of a full lip. Pigmentations can be inserted to obtain more natural lip color or more vibrant colors, retouch time frame varies depend on the desired colors.</p>
            </div>
            <div className="section_footer">
              <LinkContainer to={'/seminars/lips'}>
                <Button>
                  Get More Info
                </Button>
              </LinkContainer>
            </div>
          </div>
        </Parallax>
      </div>

      <div className="parallax">
        <Parallax strength={500}>
          <Background>
            <img id="parallax_img" src={eyeliners} alt="hair_strokes"/>
          </Background>
          <div className="parallax_body">
            <h1>Eyeliner</h1>
            <h3>Permanent Makeup</h3>
            <div className="section_text">
              <p>Permanent eyeliner is placed in the lash line, which enhances and defines the beauty of the eyes. The technique is a very natural look and will make lashes appear thicker when not wearing mascara. It opens the eyes and makes them "pop".</p>
            </div>
            <div className="section_footer">
              <LinkContainer to={'/seminars/lips'}>
                <Button>
                  Get More Info
                </Button>
              </LinkContainer>
            </div>
          </div>
        </Parallax>
      </div>

      <Grid id="category">
        <Row className="show-grid">
          <Col xs={18} sm={4} md={4} id="link_container">
            <LinkContainer id="category_links" to={'/seminars'}>
            <div id="list_items">
              <img id="category_img" src={seminars} alt="seminars" />
              <div className="box">
                <h3>Seminars</h3>
              </div>
            </div>
          </LinkContainer>
          </Col>

          <Col xs={18} sm={4} md={4} id="link_container">
            <LinkContainer id="category_links" to={'/register'}>
            <div id="list_items">
              <img id="category_img" src={register} alt="register" />
              <div className="box">
                <h3>Register</h3>
              </div>
            </div>
          </LinkContainer>
          </Col>

          <Col xs={18} sm={4} md={4} id="link_container">
            <LinkContainer id="category_links" to={'/faq'}>
            <div id="list_items">
              <img id="category_img" src={faq} alt="faq" />
              <div className="box">
                <h3>FAQs</h3>
              </div>
            </div>
          </LinkContainer>
          </Col>
        </Row>
      </Grid>


    </div>
  );
};

export default Landing;
