import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

import Photos from 'containers/Photos';

import Add from 'components/Add';
import Filter from 'components/Filter';
import Search from 'components/Search';

import { loadData, setCurrentPage } from 'actions';
import { IPagination, IPhoto } from 'reducers';

import styles from 'styles/styles.css';

class CataloguerView extends React.Component<any, any> {
  componentDidMount() {
    this.props.loadData();
  }
  render() {
    return (
      <div>
        <Row className={styles.rowPadding}>
          <Search />
          <Add />
        </Row>
        <Row className={styles.rowPadding}>
          <Filter />
        </Row>
        <Row className={styles.rowPadding}>
          <Photos
            photos={this.props.photos}
            pagination={this.props.pagination}
            setCurrentPage={this.props.setCurrentPage}
          />
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (
  {photos, pagination}: {photos: IPhoto[], pagination: IPagination}
) => ({photos, pagination});
export default connect(
  mapStateToProps,
  {loadData, setCurrentPage}
)(CataloguerView);
