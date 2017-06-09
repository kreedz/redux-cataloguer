import React, { SFC } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

import Cataloguer from 'containers/Cataloguer';

import Add from 'components/Add';
import Filter from 'components/Filter';
import Photos from 'components/Photos';
import Search from 'components/Search';

import styles from './styles.css';

const App: SFC<any> = () => (
  <Grid className={styles.cataloguer}>
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
  </Grid>
);

export default App;
