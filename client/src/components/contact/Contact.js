import React, { Component } from 'react';
import { Col, Grid, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import address_icon from './images/address_dark.png';
import phone_icon from './images/phone_dark.png';
import email_icon from './images/email_dark.png';
import subway_4 from './images/subway_4.png';
import subway_5 from './images/subway_5.png';
import subway_6 from './images/subway_6.png';
import subway_b from './images/subway_b.png';
import subway_d from './images/subway_d.png';
import subway_n from './images/subway_n.png';
import subway_q from './images/subway_q.png';
import subway_r from './images/subway_r.png';
import subway_w from './images/subway_w.png';

import './_contact.scss';

class Contact extends Component {
  render() {
    return (
      <div id="contact" className="container-fluid">
        <h2>Contact</h2>
        <Grid>
          <Row>
            <Col id="google" xs={18} sm={7} md={7}>
              <iframe title="google_map" id="google_map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.022962498522!2d-73.995666!3d40.717510999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xded98cc42252fff4!2sOutstanding+Training+Center!5e0!3m2!1sen!2sus!4v1503956555028" allowFullScreen></iframe>
            </Col>

            <Col id="contact_us" xs={18} sm={5} md={5}>
              <h3>CONTACT US</h3>
              <Row>
                <Image src={address_icon}/>
                <Link to={'https://www.google.com/maps/place/Outstanding+Training+Center/@40.717511,-73.995666,15z/data=!4m2!3m1!1s0x0:0xded98cc42252fff4?sa=X&ved=0ahUKEwjQ7fCaxvzVAhVHLSYKHa0FCkEQ_BIIazAK'} target='_blank'> 90 Bowery Street Suite 403, New York, NY 10013</Link>
              </Row>
              <Row>
                <Image src={phone_icon}/>
                <Link to={'tel:929-383-3368'} target='_blank'>(929) 383 - 3368</Link>
              </Row>
              <Row>
                <Image src={email_icon}/>
                <Link to={'mailto:outstandingtrainingcenter@gmail.com'}> outstandingtrainingcenter@gmail.com </Link>
              </Row>

              <h3>DIRECTIONS</h3>
              <p>We are located at the heart of Lower East Side / Chinatown area, and easily accessible from the following subway lines.</p>

              <Link to={'https://www.google.com/maps/place/Canal+St/@40.7186193,-74.0027878,17z/data=!4m12!1m6!3m5!1s0x89c25989f1239b81:0x5b016b54e2699e1a!2sCanal+Street+Station!8m2!3d40.7186153!4d-74.0005991!3m4!1s0x89c2598a3e0d960f:0x11e3959e4ffb1e94!8m2!3d40.7195145!4d-74.001786'} target='_blank'>
                <Row>
                  <span>Canal Street: </span>
                  <Image src={subway_4} />
                  <Image src={subway_5} />
                  <Image src={subway_6} />
                </Row>
              </Link>
              <Link to={'https://www.google.com/maps/place/Canal+Street+Station/@40.7186193,-74.0027878,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25989f1239b81:0x5b016b54e2699e1a!8m2!3d40.7186153!4d-74.0005991'} target='_blank'>
                <Row>
                  <span>Canal Street: </span>
                  <Image src={subway_n} />
                  <Image src={subway_r} />
                  <Image src={subway_w} />
                  <Image src={subway_q} />
                </Row>
              </Link>
              <Link to={'https://www.google.com/maps/place/Grand+Street+Station/@40.7190828,-73.99708,17z/data=!4m12!1m6!3m5!1s0x89c25989f1239b81:0x5b016b54e2699e1a!2sCanal+Street+Station!8m2!3d40.7186153!4d-74.0005991!3m4!1s0x89c25987e9c18a4d:0x6d94dda1b580b475!8m2!3d40.7182078!4d-73.9935905'} target='_blank'>
                <Row>
                  <span>Grand Street: </span>
                  <Image src={subway_b} />
                  <Image src={subway_d} />
                </Row>
              </Link>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Contact;
