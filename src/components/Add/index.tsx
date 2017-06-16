import React, { SFC } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import styles from './styles.css';

interface IAddProps {
  handleImageChange: (event: any) => void;
}

const Add: SFC<IAddProps> = props => (
  <Col xs={4} xsOffset={4} className="text-center">
  <div>
     <label htmlFor={styles.files} className="btn">Select Image</label>
     <input id={styles.files} type="file" onChange={props.handleImageChange}/>
   </div>
  </Col>
);

export default Add;
