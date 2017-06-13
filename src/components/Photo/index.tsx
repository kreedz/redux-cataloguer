import React, { SFC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom';

import globalStyles from 'styles/styles.css';
import styles from './styles.css';

const Photo: SFC<RouteComponentProps<any>> = (
  {
    location: {
      state: {
        photo: {url, date, like}
      }
    }
  }) => (
  <div>
    <Row className={globalStyles.rowPadding}>
      <Col xs={4} xsOffset={4}>
        <div className={styles.photo}>
          <div className={styles.photoData}>
            <div className={styles.photoView}>
              <img src={url} />
            </div>
            Date: {date}
            <br />
            Likes: {like}
          </div>
        </div>
      </Col>
    </Row>
  </div>
);

export default Photo;
