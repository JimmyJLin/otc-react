import React from 'react';
import { Parallax, Background } from 'react-parallax';
import { Button, Col, Grid, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import seminarData from '../../data/seminarData.json';

import hair_strokes from './images/hair_strokes.jpg';
import powders from './images/powders.jpg';
import lips from './images/lips.jpg';
import eyeliners from './images/eyeliners.jpg';

import './Landing.css';

const Landing = () => {
  const parallax = seminarData.seminars.map((el) => {
    return (
      <div key={ el.id } className="parallax">
        <Parallax strength={500}>
          <Background>
            <img id="parallax_img" src={ el.landing_url } alt={ el.title }/>
          </Background>
          <div className="parallax_body">
            <h1>{ el.title }</h1>
            <h3>Permanent Makeup</h3>
            <div className="section_text">
              <p>{ el.description }</p>
            </div>
            <div className="section_footer">
              <LinkContainer to={ el.url }>
                <Button>
                  Get More Info
                </Button>
              </LinkContainer>
            </div>
          </div>
        </Parallax>
      </div>
    )
  })

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

      { parallax }


      <div id="h_line" className="center-block"></div>

      <Grid id="category">
        <Row className="show-grid">
          <Col xs={18} sm={4} md={4} id="link_container">
            <LinkContainer id="category_links" to={'/seminars'}>
            <div id="list_items">
              <img id="category_img" src={'http://res.cloudinary.com/dopoq28sr/image/upload/v1506454275/seminars_navexh.png'} alt="seminars" />
              <div className="box">
                <h3>Seminars</h3>
              </div>
            </div>
          </LinkContainer>
          </Col>

          <Col xs={18} sm={4} md={4} id="link_container">
            <LinkContainer id="category_links" to={'/register'}>
            <div id="list_items">
              <img id="category_img" src={'http://res.cloudinary.com/dopoq28sr/image/upload/v1506454275/register_c1bfxj.png'} alt="register" />
              <div className="box">
                <h3>Register</h3>
              </div>
            </div>
          </LinkContainer>
          </Col>

          <Col xs={18} sm={4} md={4} id="link_container">
            <LinkContainer id="category_links" to={'/faq'}>
            <div id="list_items">
              <img id="category_img" src={'http://res.cloudinary.com/dopoq28sr/image/upload/v1506454275/faq_s2mnto.png'} alt="faq" />
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
