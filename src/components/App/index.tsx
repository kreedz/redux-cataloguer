import React, { SFC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Cataloguer from 'components/Cataloguer';

const App: SFC<any> = () => (
  <BrowserRouter>
    <Cataloguer />
  </BrowserRouter>
);

export default App;
