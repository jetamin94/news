import React, { Component } from 'react';
import { Modal, Row, Col, Button } from "react-bootstrap";
import { listMajors } from './sheetapi'
class Sheet extends Component {
  render() {
    return (
      <div>
        <Button
          bsStyle={"primary"}
          onClick={listMajors}
        >{'OK'}
        </Button>
      </div>
    )
  }
}

export default Sheet;
