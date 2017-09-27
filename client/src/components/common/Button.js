import React from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './button.css';

export default ({name, url}) =>{
    return (
      <LinkContainer to={ url }>
        <Button>
          {name}
        </Button>
      </LinkContainer>
    )
}
