import React from 'react';
import {Col, Thumbnail, Button} from 'react-bootstrap';

function Thumb(){
    const styles = {
        slategreyBackground: {
            backgroundColor: "slategrey"
        },
        aliceBlueText: {
            color: "aliceBlue"
        }
    }
    return (
        <Col xs={6} md={4}>
        <Thumbnail style={styles.slategreyBackground}>
          <h3 style={styles.aliceBlueText}>Thumbnail label</h3>
          <p style={styles.aliceBlueText}>Description</p>
          <p>
            <Button bsStyle="success">Button</Button>&nbsp;
            <Button bsStyle="default">Button</Button>
          </p>
        </Thumbnail>
      </Col>
    )
}


export default Thumb;
