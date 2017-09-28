import React from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './_button.scss';

export default ({name, url}) =>{
    return (
      <LinkContainer to={ url }>
        <Button>
          {name}
        </Button>
      </LinkContainer>
    )
}
