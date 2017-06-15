import React, { SFC } from 'react';
import { Col, Pagination, PaginationProps, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { IFilter, IPagination, IPhoto, IPhotos } from 'reducers';

import imgs from 'img';
import styles from './styles.css';

interface IPhotosProps extends PaginationProps {
  photos: IPhotos;
  pagination: IPagination;
  setCurrentPage: (current: number) => void;
  toggleLike: (id: number) => void;
  filter: IFilter;
}

const getFilteredPhotos = (photos: IPhotos, filter: IFilter) => {
  if (typeof filter.year === 'undefined') {
    return photos;
  }
  const filteredPhotos: IPhotos = {};
  Object.keys(photos).map((key: string, index: number) => {
    if (new Date(photos[key].date).getFullYear() === filter.year) {
      filteredPhotos[key] = photos[key];
    }
  });
  return filteredPhotos;
};

const getPhotosLayout = (
  photos: IPhotos,
  {current, imagesCountOnPage}: IPagination,
  toggleLike: (e: React.MouseEvent<HTMLDivElement>) => void,
) =>
  Object.keys(photos)
    .map((value: string, index: number) => {
      const photo = photos[value];
      const firstPhotoIndexOnPage = (current - 1) * imagesCountOnPage;
      if (
        index + 1 > firstPhotoIndexOnPage
        && index + 1 <= firstPhotoIndexOnPage + imagesCountOnPage
      ) {
        return (
          <Col xs={3} key={photo.id}>
            <div className={styles.photo} data-id={photo.id}>
              <span className={styles.photoLike} onClick={toggleLike}>
                <img src={photo.like.isLiked ? imgs.liked : imgs.notLiked} />
                <span>{photo.like.count > 0 ? photo.like.count : null}</span>
              </span>
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
    if (typeof photoId === 'undefined') {
      return;
    }
    this.props.toggleLike(+photoId);
  }
  render() {
    const { pagination, filter } = this.props;
    let { photos } = this.props;
    photos = getFilteredPhotos(photos, filter);
    const photosLength = Object.keys(photos).length;
    const itemsCount = Math.ceil(photosLength / pagination.imagesCountOnPage);

    const renderPagination = () => {
      if (itemsCount > 1) {
        return (
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
        );
      }
    };
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
            {renderPagination()}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Photos;
