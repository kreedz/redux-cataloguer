import React, { SFC } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

interface IAddProps {
  handleImageChange: (event: any) => void;
}

const Add: SFC<IAddProps> = props => (
  <Col xs={4} xsOffset={4} className="text-center">
    <input
      type="file"
      value="123"
      onChange={props.handleImageChange}
    />
  </Col>
);

export default Add;
