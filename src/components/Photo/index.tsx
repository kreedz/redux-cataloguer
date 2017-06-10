import React, { SFC } from 'react';
import { Row } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom';

import styles from 'styles/styles.css';

const Photo: SFC<RouteComponentProps<any>> = props => (
  <div>
    <Row className={styles.rowPadding}>
      Hello {props.match.params.imgid}
    </Row>
  </div>
);

export default Photo;
