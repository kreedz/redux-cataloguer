import React, { SFC } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Grid } from 'react-bootstrap';

import Photo from 'components/Photo';
import CataloguerView from 'containers/CataloguerView';

import styles from './styles.css';

const Cataloguer: SFC<any> = () => (
  <Grid className={styles.cataloguer}>
    <Switch>
      <Route exact={true} path="/" component={CataloguerView} />
      <Route path="/img/:imgid" component={Photo} />
    </Switch>
  </Grid>
);

export default Cataloguer;
