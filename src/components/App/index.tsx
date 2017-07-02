import React, { SFC } from 'react';
import { HashRouter } from 'react-router-dom';

import Cataloguer from 'components/Cataloguer';

const App: SFC<any> = () => (
  <HashRouter>
    <Cataloguer />
  </HashRouter>
);

export default App;
