import React, { SFC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom';

import imgs from 'img';

import photosStyles from 'containers/Photos/styles.css';
import globalStyles from 'styles/styles.css';
import styles from './styles.css';

const Photo: SFC<RouteComponentProps<any>> = (
  {
    location: {
      state: {
        photo: {url, date, like},
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
            <span className={photosStyles.photoLike}>
              <img src={like.isLiked ? imgs.liked : imgs.notLiked} />
              <span>{like.count}</span>
            </span>
          </div>
        </div>
      </div>
    </Row>
  </div>
);

export default Photo;
