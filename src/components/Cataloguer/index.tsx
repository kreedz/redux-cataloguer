import React, { SFC } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Grid } from 'react-bootstrap';

import CataloguerView from 'containers/CataloguerView';
import Photo from 'containers/Photo';

import styles from './styles.css';

const Cataloguer = () => (
  <Grid className={styles.cataloguer}>
    <Switch>
      <Route exact path="/" component={CataloguerView} />
      <Route path="/img/:imgid" component={Photo} />
    </Switch>
  </Grid>
);

export default Cataloguer;
