import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { RouteComponentProps, RouteProps } from 'react-router-dom';

import Photos from 'containers/Photos';

import Add from 'components/Add';
import Filter from 'components/Filter';
import Search from 'components/Search';

import {
  addPhoto, loadData, setCurrentPage, setFilter, toggleLike
} from 'actions';
import { IFilter, IPagination, IPhoto, IPhotos } from 'reducers';

import styles from 'styles/styles.css';

interface IStateProps {
  photos: IPhotos;
  pagination: IPagination;
  filter: IFilter;
}

interface IDispatchProps {
  loadData(): void;
  setCurrentPage(current: number): void;
  setFilter(filters: IFilter): void;
  addPhoto(url: IPhoto['url']): void;
  toggleLike(id: number): void;
}

export interface ICataloguerViewRouteProps
extends RouteProps, IStateProps, IDispatchProps {}

class CataloguerView extends React.Component<ICataloguerViewRouteProps, any> {
  constructor(props: ICataloguerViewRouteProps) {
    super(props);
    this.state = {
      imagePreviewUrl: '',
    };
  }
  componentDidMount() {
    this.props.loadData();
  }
  setYearFilter = (event: React.MouseEvent<HTMLElement>) => {
    const year = (event.target as HTMLElement).textContent;
    this.props.setCurrentPage(1);
    this.props.setFilter({year: +year});
  }
  handleImageChange = (event: any) => {
    event.preventDefault();
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onloadend = () => {
      this.props.addPhoto(reader.result);
    };
    reader.readAsDataURL(file);
  }
  render() {
    return (
      <div>
        <Row className={styles.rowPadding}>
          <Search />
          <Add handleImageChange={this.handleImageChange}/>
        </Row>
        <Row className={styles.rowPadding}>
          <Filter
            year={this.props.filter.year}
            setYearFilter={this.setYearFilter}
          />
        </Row>
        <Row className={styles.rowPadding}>
          <Photos
            photos={this.props.photos}
            pagination={this.props.pagination}
            setCurrentPage={this.props.setCurrentPage}
            toggleLike={this.props.toggleLike}
            filter={this.props.filter}
          />
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (
  {photos, pagination, filter}:
    {photos: IPhotos, pagination: IPagination, filter: IFilter}
): IStateProps => ({photos, pagination, filter});

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
  loadData, setCurrentPage, toggleLike, setFilter, addPhoto
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CataloguerView);
