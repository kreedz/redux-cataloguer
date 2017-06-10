import React, { SFC } from 'react';
import { RouteComponentProps } from 'react-router-dom';

const Photo: SFC<RouteComponentProps<any>> = props => (
  <div>Hello {props.match.params.imgid}</div>
);

export default Photo;
