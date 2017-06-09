import React, { SFC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import styles from './styles.css';

const img = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0i
            AAAABlBMVEUAAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83
            NDDeNGe4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC`;

const Photos: SFC<any> = () => (
  <div>
    <Col xs={2}>
      Фотографии
    </Col>
    <Col xs={4}>
      <div className={styles.photo}>
        <div className="photo__like">
          Лайков: 5
        </div>
        <div className={styles.photoImg}>
          <Link to="/img">
            <img src={img} />
          </Link>
        </div>
        <div className="photo__date">
          09.10.2017
        </div>
      </div>
      <div className={styles.photo}>
        <div className="photo__like">
          Лайков: 6
        </div>
        <div className={styles.photoImg}>
          <img src={img} />
        </div>
        <div className="photo__date">
          09.11.2017
        </div>
      </div>
    </Col>
  </div>
);

export default Photos;
