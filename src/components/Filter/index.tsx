import React, { SFC } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

interface IFilterProps {
  setFilter: (event: any) => void;
}

const Filter: SFC<IFilterProps> = props => (
  <div>
    <Col xs={2}>
      Фильтр по годам
    </Col>
    <Col xs={6}>
      <Col xs={4}>
        <Button onClick={props.setFilter}>2015</Button>
      </Col>
      <Col xs={4}>
        <Button onClick={props.setFilter}>2016</Button>
      </Col>
      <Col xs={4}>
        <Button onClick={props.setFilter}>2017</Button>
      </Col>
    </Col>
  </div>
);

export default Filter;
