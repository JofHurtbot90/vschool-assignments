import React from 'react';
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap';

function SMSList(){
  const thumbnailInstance = (
  <Grid>
    <Row>
      <Col xs={6} md={4}>
        <Thumbnail src="" alt="242x200">
          <h3>Andy Park</h3>
        <p>Vis Dev Supervisor/Lead Character Concept Artist</p>
          <p>
            <Button bsStyle="primary">Submit</Button>&nbsp;
            <Button bsStyle="default">Delete</Button>
          </p>
        </Thumbnail>
      </Col>
      <Col xs={6} md={4}>
        <Thumbnail src="" alt="242x200">
          <h3>Jung Park</h3>
        <p>Lead Concept Artist</p>
          <p>
            <Button bsStyle="primary">Submit</Button>&nbsp;
            <Button bsStyle="default">Delete</Button>
          </p>
        </Thumbnail>
      </Col>
      <Col xs={6} md={4}>
        <Thumbnail src="" alt="242x200">
          <h3>Luke Berliner</h3>
        <p>Lead Environment Concept Artist</p>
          <p>
            <Button bsStyle="primary">Submit</Button>&nbsp;
            <Button bsStyle="default">Delete</Button>
          </p>
        </Thumbnail>
      </Col>
      <Col xs={6} md={4}>
        <Thumbnail src="" alt="242x200">
          <h3>Cliff Childs</h3>
        <p>Senior Concept Artist</p>
          <p>
            <Button bsStyle="primary">Submit</Button>&nbsp;
            <Button bsStyle="default">Delete</Button>
          </p>
        </Thumbnail>
      </Col>
    </Row>
  </Grid>
);

  return(
<div>
  {thumbnailInstance}
</div>
)
}

export default SMSList;
