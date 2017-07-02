import React, { SFC } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Grid } from 'react-bootstrap';

import CataloguerView from 'containers/CataloguerView';
import Photo from 'containers/Photo';

import styles from './styles.css';

const Cataloguer: SFC<any> = () => (
  <Grid className={styles.cataloguer}>
    <Switch>
      <Route exact path="/" component={CataloguerView as any} />
      <Route path="/img/:imgid" component={Photo as any} />
    </Switch>
  </Grid>
);

export default Cataloguer;
