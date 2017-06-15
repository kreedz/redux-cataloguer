import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

import Photos from 'containers/Photos';

import Add from 'components/Add';
import Filter from 'components/Filter';
import Search from 'components/Search';

import { loadData, setCurrentPage, setFilter, toggleLike } from 'actions';
import { IFilter, IPagination, IPhoto } from 'reducers';

import styles from 'styles/styles.css';

class CataloguerView extends React.Component<any, any> {
  componentDidMount() {
    this.props.loadData();
  }
  setFilter = (event: React.MouseEvent<HTMLElement>) => {
    const year = (event.target as HTMLElement).textContent;
    this.props.setCurrentPage(1);
    this.props.setFilter(+year);
  }
  render() {
    return (
      <div>
        <Row className={styles.rowPadding}>
          <Search />
          <Add />
        </Row>
        <Row className={styles.rowPadding}>
          <Filter
            filter={this.props.filter}
            setFilter={this.setFilter}
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
    {photos: IPhoto[], pagination: IPagination, filter: IFilter}
) => ({photos, pagination, filter});
export default connect(
  mapStateToProps,
  {loadData, setCurrentPage, toggleLike, setFilter}
)(CataloguerView);
