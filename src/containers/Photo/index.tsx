import React, { SFC } from 'react';
import {
  Button, Col, ControlLabel, FormControl, FormGroup, Row
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { RouteComponentProps, RouteProps } from 'react-router-dom';

import { setDescription, toggleLike } from 'actions';
import { IPhotos } from 'reducers';
import { getPhotoAndKeyById } from 'reducers/photos';

import { toggleLikeWrapper } from 'containers/Photos';

import imgs from 'img';

import globalStyles from 'styles/styles.css';
import styles from './styles.css';

interface IPhotoProps extends RouteProps {
  photos: IPhotos;
  toggleLike: (id: number) => void;
  setDescription: (description: string, id: number) => void;
}

class Photo extends React.Component<IPhotoProps, any> {
  setDescription = (event: React.FormEvent<FormControl>) => {
    const id = this.props.location.state.id;
    const description = (event.target as HTMLTextAreaElement).value;
    this.props.setDescription(description, id);
  }
  getDescriptionByKey = (key: number) =>
    getPhotoAndKeyById(this.props.photos, key).photo.description
  render() {
    const {
      location: {
        state: {
          id
        }
      }
    } = this.props;
    const {photo, photoKey} = getPhotoAndKeyById(this.props.photos, id);
    const {url, date, like, description} = photo;
    const {showImage, hideImage} = styles;
    return (
      <div>
        <Row className={globalStyles.rowPadding}>
          <div className={styles.photo}>
            <div className={styles.photoData}>
              <div className={styles.photoView}>
                <img src={url} />
              </div>
              <div className={styles.centerText} data-id={photo.id}>
                Date: {date}
                <br />
                <span
                  className={styles.photoLike}
                  onClick={toggleLikeWrapper(this.props.toggleLike)}
                >
                  <img
                    src={imgs.liked}
                    className={like.isLiked ? showImage : hideImage}
                  />
                  <img
                    src={imgs.notLiked}
                    className={like.isLiked ? hideImage : showImage}
                  />
                  <span>{like.count > 0 ? like.count : null}</span>
                </span>
                <FormGroup
                  controlId="formControlsTextarea"
                  className={styles.form}
                >
                  <FormControl
                    componentClass="textarea"
                    placeholder="Description"
                    value={this.getDescriptionByKey(id)}
                    onChange={this.setDescription}
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
  {toggleLike, setDescription}
)(Photo);
