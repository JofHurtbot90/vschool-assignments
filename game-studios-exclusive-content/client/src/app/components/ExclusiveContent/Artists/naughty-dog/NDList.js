import React from 'react';
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap';
import image1 from '../../exclusive-content-images/content-art/naughty-dog/aaron-limonick/The_Last_of_Us_Concept_Art_Bills_Town_Church_AL-01.jpg';

function NDList(){
  const thumbnailInstance = (
  <Grid>
    <Row>
      <Col xs={6} md={4}>
        <Thumbnail img src={image1}>
          <h3>Aaron Limonick</h3>
          <p>Concept Artist</p>
          <p>
            <Button bsStyle="primary">Submit</Button>&nbsp;
            <Button bsStyle="delete">Delete</Button>
          </p>
        </Thumbnail>
      </Col>
      <Col xs={6} md={4}>
        <Thumbnail img src= >
          <h3>Eytan Zana</h3>
        <p>Environment Artist</p>
          <p>
            <Button bsStyle="primary">Submit</Button>&nbsp;
            <Button bsStyle="delete">Delete</Button>
          </p>
        </Thumbnail>
      </Col>
      <Col xs={6} md={4}>
        <Thumbnail img src= >
          <h3>John Sweeney</h3>
        <p>Art Director</p>
          <p>
            <Button bsStyle="primary">Submit</Button>&nbsp;
            <Button bsStyle="delete">Delete</Button>
          </p>
        </Thumbnail>
      </Col>
      <Col xs={6} md={4}>
        <Thumbnail img src= >
          <h3>Nick Gindraux</h3>
        <p>Concept Artist</p>
          <p>
            <Button bsStyle="primary">Submit</Button>&nbsp;
            <Button bsStyle="delete">Delete</Button>
          </p>
        </Thumbnail>
      </Col><Col xs={6} md={4}>
        <Thumbnail img src= >
          <h3>Maciej Kuciara</h3>
          <p>Freelance Concept Artist/Concept Designer</p>
          <p>
            <Button bsStyle="primary">Submit</Button>&nbsp;
            <Button bsStyle="delete">Delete</Button>
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

export default NDList;
