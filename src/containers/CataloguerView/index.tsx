import React from 'react';

import { Col, Grid, Row } from 'react-bootstrap';

import Add from 'components/Add';
import Filter from 'components/Filter';
import Photos from 'components/Photos';
import Search from 'components/Search';

import styles from 'styles/styles.css';

class CataloguerView extends React.Component<any, any> {
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

export default CataloguerView;
