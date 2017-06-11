import React from 'react';
import { connect } from 'react-redux';

import { Col, Grid, Row } from 'react-bootstrap';

import Add from 'components/Add';
import Filter from 'components/Filter';
import Photos from 'components/Photos';
import Search from 'components/Search';

import { loadData } from 'actions';
import { IState } from 'reducers';

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
          <Photos />
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({photos}: {photos: IState}) => ({photos});
export default connect(mapStateToProps, {loadData})(CataloguerView);
