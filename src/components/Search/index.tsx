import React, { SFC } from 'react';
import { Button, Col, FormControl, Row } from 'react-bootstrap';

const Search: SFC<any> = () => (
  <Col xs={4}>
    <div className="input-group">
      <FormControl
        type="text"
      />
      <div className="input-group-btn">
        <Button>Поиск</Button>
      </div>
    </div>
  </Col>
);

export default Search;
