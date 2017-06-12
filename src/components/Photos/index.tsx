import React, { SFC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { IPhoto } from 'reducers';

import styles from './styles.css';

const img = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0i
            AAAABlBMVEUAAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83
            NDDeNGe4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC`;

const getPhotosLayout = (photos: IPhoto[]) =>
  photos.map((photo: IPhoto) => (
    <div className={styles.photo}>
      <div className="photo__like">
        Лайков: 5
      </div>
      <div className={styles.photoImg}>
        <Link to={`/img/1`}>
          <img src={img} />
        </Link>
      </div>
      <div className="photo__date">
        09.10.2017
      </div>
    </div>
  ));

const Photos: SFC<any> = ({photos}) => (
  <div>
    <Col xs={2}>
      Фотографии
    </Col>
    <Col xs={4}>
      {getPhotosLayout(photos)}
    </Col>
  </div>
);

export default Photos;
