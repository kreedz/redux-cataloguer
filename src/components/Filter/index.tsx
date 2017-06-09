import React, { SFC } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const Filter: SFC<any> = () => (
  <div>
    <Col xs={2}>
      Фильтр по годам
    </Col>
    <Col xs={6}>
      <Col xs={4}>
        <Button>2015</Button>
      </Col>
      <Col xs={4}>
        <Button>2016</Button>
      </Col>
      <Col xs={4}>
        <Button>2017</Button>
      </Col>
    </Col>
  </div>
);

export default Filter;
