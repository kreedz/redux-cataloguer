import React, { SFC } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import { IFilter } from 'reducers';

interface IFilterProps {
  year: number;
  setYearFilter: (event: any) => void;
}

const getFilterButtonsLayout = (props: IFilterProps) => {
  const buttonsText = [2015, 2016, 2017];
  return buttonsText.map(text => (
    <Col xs={4} key={text}>
      <Button
        bsStyle={text === props.year ? 'primary' : 'default'}
        onClick={props.setYearFilter}
      >
        {text}
      </Button>
    </Col>
  ));
};

const Filter: SFC<IFilterProps> = props => (
  <div>
    <Col xs={2}>
      Filter by years
    </Col>
    <Col xs={6}>
      {getFilterButtonsLayout(props)}
    </Col>
  </div>
);

export default Filter;
