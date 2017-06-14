import React, { SFC } from 'react';
import { Col, Pagination, PaginationProps, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { IPagination, IPhoto, IPhotos } from 'reducers';

import styles from './styles.css';

declare function require(s: string): string;
const imgs = {
  liked: require('img/like__liked.png'),
  notLiked: require('img/like__not_liked.png'),
};

interface IPhotosProps extends PaginationProps {
  photos: IPhotos;
  pagination: IPagination;
  setCurrentPage: (current: number) => void;
  toggleLike: (id: number) => void;
}

const getPhotosLayout = (
  photos: IPhotos,
  {current, imagesCountOnPage}: IPagination,
  toggleLike: (e: React.MouseEvent<HTMLDivElement>) => void,
) =>
  Object.keys(photos).map((value: string, index: number) => {
    const photo = photos[value];
    const firstPhotoIndexOnPage = (current - 1) * imagesCountOnPage;
    if (
      index + 1 > firstPhotoIndexOnPage
      && index + 1 < firstPhotoIndexOnPage + imagesCountOnPage
    ) {
      return (
        <Col xs={3} key={photo.id}>
          <div className={styles.photo} data-id={photo.id}>
            <div className={styles.photoLike} onClick={toggleLike}>
              <img src={imgs.notLiked} />
              <span>{photo.like.count}</span>
            </div>
            <div className={styles.photoData}>
              <div className={styles.photoView}>
                <Link to={{pathname: `/img/${photo.id}`, state: {photo}}}>
                  <img src={photo.url} />
                </Link>
              </div>
            </div>
            <div className={styles.photoDate}>
              {photo.date}
            </div>
          </div>
        </Col>
      );
    }
  });

class Photos extends React.Component<IPhotosProps, any> {
  setCurrentPage = (e: React.MouseEvent<HTMLLIElement>) => {
    this.props.setCurrentPage(e as any as number);
  }
  toggleLike = (e: React.MouseEvent<HTMLElement>) => {
    const photoId =
      (e.target as HTMLElement).parentElement.parentElement.dataset.id;
    this.props.toggleLike(+photoId);
  }
  render() {
    const {photos, pagination} = this.props;
    const photosLength = Object.keys(photos).length;
    const itemsCount = photosLength / pagination.imagesCountOnPage + 1;
    return (
      <div>
        <Col xs={2}>
          <span className={styles.photosLabel}>
            Фотографии
          </span>
        </Col>
        <Col xs={8}>
          {getPhotosLayout(photos, pagination, this.toggleLike)}
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
              items={itemsCount}
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
