import React, { SFC } from 'react';
import { Route, Switch } from 'react-router-dom';

import Photo from 'components/Photo';
import CataloguerView from 'containers/CataloguerView';

const Cataloguer: SFC<any> = () => (
  <Switch>
    <Route exact={true} path="/" component={CataloguerView} />
    <Route path="/img/:imgid" component={Photo} />
  </Switch>
);

export default Cataloguer;
