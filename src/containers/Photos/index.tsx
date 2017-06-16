import React, { SFC } from 'react';
import { Col, Pagination, PaginationProps, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { IFilter, IPagination, IPhoto, IPhotos } from 'reducers';

import imgs from 'img';

import photosStyles from 'containers/Photo/styles.css';
import styles from './styles.css';

interface IPhotosProps extends PaginationProps {
  photos: IPhotos;
  pagination: IPagination;
  setCurrentPage: (current: number) => void;
  toggleLike: (id: number) => void;
  filter: IFilter;
}

export const toggleLikeWrapper = (toggleLikeAction: IPhotosProps['toggleLike']) =>
  (e: React.MouseEvent<HTMLElement>) => {
    const photoId =
      (e.target as HTMLElement).parentElement.parentElement.dataset.id;
    if (typeof photoId === 'undefined') {
      return;
    }
    toggleLikeAction(+photoId);
  };

const getPhotosFilteredByYear = (photos: IPhotos, year: IFilter['year']) => {
  if (typeof year === 'undefined') {
    return photos;
  }
  const filteredByYear: IPhotos = {};
  Object.keys(photos).map((key: string) => {
    if (new Date(photos[key].date).getFullYear() === year) {
      filteredByYear[key] = photos[key];
    }
  });
  return filteredByYear;
};

const getPhotosFilteredByDescription = (
  photos: IPhotos, description: IFilter['description']
) => {
  if (typeof description === 'undefined' || description === '') {
    return photos;
  }
  const filteredByDescription: IPhotos = {};
  Object.keys(photos).map((key: string) => {
    const photoDescription = photos[key].description;
    if (
      typeof photoDescription !== 'undefined'
      && photoDescription.includes(description)
    ) {
      filteredByDescription[key] = photos[key];
    }
  });
  return filteredByDescription;
};

const getFilteredPhotos = (photos: IPhotos, filter: IFilter) => {
  const photosFilteredByYear = getPhotosFilteredByYear(photos, filter.year);
  return getPhotosFilteredByDescription(
    photosFilteredByYear, filter.description
  );
};

const getPhotosLayout = (
  photos: IPhotos,
  {current, imagesCountOnPage}: IPagination,
  toggleLike: (toggleLikeAction: IPhotosProps['toggleLike']) =>
    (e: React.MouseEvent<HTMLDivElement>) => void,
  props: IPhotosProps,
) =>
  Object.keys(photos).sort()
    .map((value: string, index: number) => {
      const photo = photos[value];
      const firstPhotoIndexOnPage = (current - 1) * imagesCountOnPage;
      if (
        index + 1 > firstPhotoIndexOnPage
        && index + 1 <= firstPhotoIndexOnPage + imagesCountOnPage
      ) {
        const like = photo.like;
        const {showImage, hideImage} = photosStyles;
        return (
          <Col xs={3} key={photo.id}>
            <div className={styles.photo} data-id={photo.id}>
              <span
                className={styles.photoLike}
                onClick={toggleLike(props.toggleLike)}
              >
                <img
                  src={imgs.liked}
                  className={like.isLiked ? showImage : hideImage}
                />
                <img
                  src={imgs.notLiked}
                  className={like.isLiked ? hideImage : showImage}
                />
                <span>{photo.like.count > 0 ? photo.like.count : null}</span>
              </span>
              <div className={styles.photoData}>
                <div className={styles.photoView}>
                  <Link to={{pathname: `/img/${photo.id}`, state: {id: photo.id}}}>
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

const getPaginationLayout = (
  itemsCount: number,
  pagination: IPagination,
  setCurrentPage: (e: any) => void
) => {
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
        onSelect={setCurrentPage}
      />
    );
  }
};

class Photos extends React.Component<IPhotosProps, any> {
  setCurrentPage = (e: React.MouseEvent<HTMLLIElement>) => {
    this.props.setCurrentPage(e as any as number);
  }
  render() {
    const { pagination, filter } = this.props;
    let { photos } = this.props;
    photos = getFilteredPhotos(photos, filter);
    const photosLength = Object.keys(photos).length;
    const itemsCount = Math.ceil(photosLength / pagination.imagesCountOnPage);
    return (
      <div>
        <Col xs={2}>
          <span className={styles.photosLabel}>
            Фотографии
          </span>
        </Col>
        <Col xs={8}>
          {getPhotosLayout(photos, pagination, toggleLikeWrapper, this.props)}
        </Col>
        <Row>
          <Col xs={8} xsOffset={2} className={styles.pagination}>
            {getPaginationLayout(itemsCount, pagination, this.setCurrentPage)}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Photos;
