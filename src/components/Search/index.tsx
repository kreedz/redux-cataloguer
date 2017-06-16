import React, { SFC } from 'react';
import { Button, Col, FormControl, Row } from 'react-bootstrap';

import { IFilter } from 'reducers';

interface IFilterProps {
  filter: IFilter;
  setDescriptionFilter: (event: any) => void;
}

const Search: SFC<any> = (props: IFilterProps) => {
  this.input = undefined;
  return (
    <Col xs={4}>
      <div className="input-group">
        <FormControl
          type="text"
        />
        <div className="input-group-btn">
          <Button onClick={props.setDescriptionFilter}>Поиск</Button>
        </div>
      </div>
    </Col>
  );
};

export default Search;
