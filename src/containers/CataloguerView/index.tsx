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
  setYearFilter = (event: React.MouseEvent<HTMLElement>) => {
    const year = (event.target as HTMLElement).textContent;
    this.props.setCurrentPage(1);
    this.props.setFilter({year: +year});
  }
  setDescriptionFilter = (event: React.MouseEvent<HTMLElement>) => {
    const description = (event.target as HTMLElement).textContent;
    this.props.setCurrentPage(1);
    this.props.setFilter({description: '1'});
  }
  render() {
    return (
      <div>
        <Row className={styles.rowPadding}>
          <Search
            description={this.props.filter.description}
            setDescriptionFilter={this.setDescriptionFilter}
          />
          <Add />
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
    {photos: IPhoto[], pagination: IPagination, filter: IFilter}
) => ({photos, pagination, filter});
export default connect(
  mapStateToProps,
  {loadData, setCurrentPage, toggleLike, setFilter}
)(CataloguerView);
