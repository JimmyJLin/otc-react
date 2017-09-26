import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import seminarData from '../../data/seminarData.json';
import { LinkContainer } from 'react-router-bootstrap';
import './seminars.css';

class Seminar extends Component {

  render() {
    const seminars = seminarData.seminars.map((el) => {
      return (
        <div id="seminars" key={el.id}>
          <LinkContainer to={el.url}>
            <Grid>
              <Row>
                <Col id="img_container" xs={18} sm={6} md={7}>
                  <img id="seminar_img" src={el.img_url} alt=""/>
                </Col>
                <Col xs={18} sm={6} md={5}>
                  <h3 id="seminar_title">{el.title}</h3>
                  <p id="seminar_description">{el.description}</p>
                  <p id="seminar_url">
                    FOR MORE INFO
                    <span className="glyphicon glyphicon-chevron-right"></span>
                  </p>
                </Col>
              </Row>
            </Grid>
          </LinkContainer>
        </div>
      )
    })

    return (
      <div className="container-fluid">
        <div id="index-top">
          <h3>Microblading The #1 Beauty Trends In 2017 - SELF</h3>
          <h4>It's never too late to learn something New!</h4>
        </div>

        <div>{ seminars }</div>
      </div>
    );
  }
}

export default Seminar;
