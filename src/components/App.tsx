import React, { SFC } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

import Cataloguer from 'containers/Cataloguer';

const App: SFC<any> = () => (
  <Grid>
    <Row className="show-grid">
      <Col xs={4} xsOffset={4}>
        <Cataloguer />
      </Col>
    </Row>
  </Grid>
);

export default App;
