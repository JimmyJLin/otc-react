import React from 'react';
import { Button } from 'react-bootstrap';
import './button.css';

export default ({name}) =>{
    return (
      <Button>
        {name}
      </Button>
    )
}
