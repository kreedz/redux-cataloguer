import React, { SFC } from 'react';
import { Col, ControlLabel, FormControl, FormGroup, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { toggleLike } from 'actions';
import { IPhotos } from 'reducers';
import { getPhotoAndKeyById } from 'reducers/photos';

import { toggleLikeWrapper } from 'containers/Photos';

import imgs from 'img';

import globalStyles from 'styles/styles.css';
import styles from './styles.css';

interface IPhotoProps extends RouteComponentProps<any> {
  photos: IPhotos;
  toggleLike: (id: number) => void;
}

class Photo extends React.Component<IPhotoProps, any> {
  render() {
    const {
      location: {
        state: {
          id
        }
      }
    } = this.props;
    const {photo, photoKey} = getPhotoAndKeyById(this.props.photos, id);
    const {url, date, like} = photo;
    return (
      <div>
        <Row className={globalStyles.rowPadding}>
          <div className={styles.photo}>
            <div className={styles.photoData}>
              <div className={styles.photoView}>
                <img src={url} />
              </div>
              <div className={styles.centerText} data-id={photo.id}>
                Дата: {date}
                <br />
                <span className={styles.photoLike}>
                  <img
                    src={like.isLiked ? imgs.liked : imgs.notLiked}
                    onClick={toggleLikeWrapper(this.props.toggleLike)}
                  />
                  <span>{like.count > 0 ? like.count : null}</span>
                </span>
                <FormGroup
                  controlId="formControlsTextarea"
                  className={styles.form}
                >
                  <FormControl
                    componentClass="textarea"
                    placeholder="Описание"
                  />
                </FormGroup>
              </div>
            </div>
          </div>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (
  {photos}: {photos: IPhotos}
) => ({photos});
export default connect(
  mapStateToProps,
  {toggleLike}
)(Photo);
