import React, { SFC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { IPhoto } from 'reducers';

import styles from './styles.css';

const getPhotosLayout = (photos: IPhoto[]) =>
  photos.map((photo: IPhoto, index) => (
    <Col md={3} className={styles.photo} key={photo.id}>
      <div className="photo__like">
        Лайков: {photo.like}
      </div>
      <div className={styles.photoImg}>
        <Link to={`/img/${photo.id}`}>
          <img src={photo.url} />
        </Link>
      </div>
      <div className="photo__date">
        {photo.date.toLocaleDateString()}
      </div>
</Col>
  ));

const Photos: SFC<any> = ({photos}) => (
  <div>
    <Col xs={2}>
      <span className={styles.photosLabel}>
        Фотографии
      </span>
    </Col>
    <Col xs={8}>
      {getPhotosLayout(photos)}
    </Col>
  </div>
);

export default Photos;
