import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import { Col, Grid, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import seminarData from '../../data/seminarData.json';
import Button from '../common/Button'

import './_landing.scss';

const CATEGORIES = [
  {
    name: 'seminars',
    imgUrl: 'http://res.cloudinary.com/dopoq28sr/image/upload/v1506454275/seminars_navexh.png',
    pathUrl: '/seminars',
    title: 'Seminars'
  },
  {
    name: 'register',
    imgUrl: 'http://res.cloudinary.com/dopoq28sr/image/upload/v1506454275/register_c1bfxj.png',
    pathUrl: '/register',
    title: 'Register'
  },
  {
    name: 'faq',
    imgUrl: 'http://res.cloudinary.com/dopoq28sr/image/upload/v1506454275/faq_s2mnto.png',
    pathUrl: '/faq',
    title: 'FAQs'
  }
]

class Landing extends Component {
  renderParallax(){
    return seminarData.seminars.map((el) => {
      return (
        <div key={ el.id } className="parallax">
          <Parallax strength={500}>
            <Background>
              <img id="parallax_img" src={ el.landing_url } alt={ el.title }/>
            </Background>
          </Parallax>
          <div id="parallax_body">
            <h1>{ el.title.toUpperCase() }</h1>
            <h3>Permanent Makeup</h3>
            <div className="section_text">
              <p>{ el.description }</p>
            </div>
            <div className="section_footer">
                <Button name={'Get More Info'} url={el.url}/>
            </div>
          </div>
        </div>
      )
    })
  }

  renderCategories() {
    return CATEGORIES.map(({name, imgUrl, pathUrl, title}) => {
      return (
        <Col key={name} xs={18} sm={4} md={4} id="link_container">
            <LinkContainer id="category_links" to={pathUrl}>
            <div id="list_items">
              <img id="category_img" src={imgUrl} alt={name} />
              <div className="box">
                <h3>{title}</h3>
              </div>
            </div>
          </LinkContainer>
        </Col>
      )
    })
  }


  render(){
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
        { this.renderParallax() }
        <div id="h_line" className="center-block"></div>
        <Grid id="category">
          <Row className="show-grid">
            { this.renderCategories() }
          </Row>
        </Grid>
      </div>
    );
  }
};

export default Landing;
