import React, { SFC } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const Add: SFC<any> = () => (
  <Col xs={4} xsOffset={4} className="text-center">
    <Button>Добавить ещё</Button>
  </Col>
);

export default Add;
