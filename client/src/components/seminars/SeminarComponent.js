import React from 'react';
import Button from '../common/Button';
import { Row } from 'react-bootstrap';
import './_seminarComponent.scss'

export default ({ values: {title, type, length, description, img_url, additional_info, model, model_details, starter_kit, starter_kit_details, benefits, benefits_details, fee, url } }) => {
  return (
    <div id="seminar_container" key={title} className="container-fluid">
      <div id="h_line" className="center-block"></div>
      <h2 id="seminar_container_title">{title.toUpperCase()}</h2>
      <h4>{type} - {length}</h4>
      <p id="seminar_container_description">{description}</p>
      <Row>
        <img id="seminarComponent_img" src={img_url} alt=""/>
      </Row>
      <p id="seminar_container_description">{additional_info}</p>
      <div id="seminar_container_benefits">
        <div id="span_container">
          <p id="span_title">{model}</p>
          <p>
            {model_details}
          </p>
        </div>
        <div id="span_container">
          <p id="span_title">{starter_kit}</p>
          <p>
            {starter_kit_details}
          </p>
        </div>
        <div id="span_container">
          <p id="span_title">{benefits}</p>
          <p>
            {benefits_details}
          </p>
        </div>
        <h3 id="seminar_container_fee">Seminar Fee: ${fee}</h3>
        {/* <Button name={'Get More Info'} url={'/register'}/> */}
        <div id="register" >
          <Button name={'Register Today'} url={'/register'}/>
        </div>
      </div>
    </div>
  )
}
