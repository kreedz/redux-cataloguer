import React, { SFC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom';

import globalStyles from 'styles/styles.css';
import styles from './styles.css';

const img = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0i
            AAAABlBMVEUAAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83
            NDDeNGe4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC`;

const Photo: SFC<RouteComponentProps<any>> = props => (
  <div>
    <Row className={globalStyles.rowPadding}>
      <Col xs={4} xsOffset={4}>
        <div className={styles.photo}>
          <div className={styles.photoData}>
            <div className={styles.photoView}>
              <img src={img} />
            </div>
            Date: {props.match.params.imgid}
            <br />
            Likes: 1
            <br />
            Description: 123
          </div>
        </div>
      </Col>
    </Row>
  </div>
);

export default Photo;
