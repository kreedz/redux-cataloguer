import React, { SFC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom';

import globalStyles from 'styles/styles.css';
import styles from './styles.css';

const Photo: SFC<RouteComponentProps<any>> = (
  {
    location: {
      state: {
        photo: {url, date, like: {count: like}}
      }
    }
  }) => (
  <div>
    <Row className={globalStyles.rowPadding}>
      <div className={styles.photo}>
        <div className={styles.photoData}>
          <div className={styles.photoView}>
            <img src={url} />
          </div>
          <div className={styles.centerText}>
            Дата: {date}
            <br />
            Лайков: {like}
          </div>
        </div>
      </div>
    </Row>
  </div>
);

export default Photo;
