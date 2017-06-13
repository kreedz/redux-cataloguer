import React, { SFC } from 'react';
import { Col, Pagination, PaginationProps, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { IPhoto } from 'reducers';
import { IPagination } from 'reducers';

import styles from './styles.css';

interface IPhotosProps extends PaginationProps {
  photos: IPhoto[];
  pagination: IPagination;
  setCurrentPage: (current: number) => void;
}

const getPhotosLayout = (
  photos: IPhoto[],
  {current, imagesCountOnPage}: IPagination
) =>
  photos.map((photo: IPhoto, index) => {
    const firstPhotoIndexOnPage = (current - 1) * imagesCountOnPage;
    if (
      index + 1 > firstPhotoIndexOnPage
      && index + 1 < firstPhotoIndexOnPage + imagesCountOnPage
    ) {
      return (
        <Col xs={3} className={styles.photo} key={photo.id}>
          <div className="photo__like">
            Лайков: {photo.like}
          </div>
          <div className={styles.photoImg}>
            <Link to={{pathname: `/img/${photo.id}`, state: {photo}}}>
              <img src={photo.url} />
            </Link>
          </div>
          <div className="photo__date">
            {photo.date}
          </div>
        </Col>
      );
    }
  });

class Photos extends React.Component<IPhotosProps, any> {
  setCurrentPage = (e: React.MouseEvent<HTMLLIElement>) => {
    this.props.setCurrentPage(e as any as number);
  }
  render() {
    const {photos, pagination} = this.props;
    return (
      <div>
        <Col xs={2}>
          <span className={styles.photosLabel}>
            Фотографии
          </span>
        </Col>
        <Col xs={8}>
          {getPhotosLayout(photos, pagination)}
        </Col>
        <Row>
          <Col xs={8} xsOffset={2} className={styles.pagination}>
            <Pagination
              prev
              next
              first
              last
              ellipsis
              boundaryLinks
              items={photos.length / pagination.imagesCountOnPage + 1}
              maxButtons={5}
              activePage={pagination.current}
              onSelect={this.setCurrentPage}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Photos;
