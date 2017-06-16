import React, { SFC } from 'react';
import { Button, Col, FormControl, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

import { setCurrentPage, setFilter } from 'actions';

import { IFilter } from 'reducers';

class Search extends React.Component<any, any> {
  private input: HTMLInputElement;
  setInputRef = (ref: HTMLInputElement) => {
    this.input = ref;
  }
  setDescriptionFilter = (event: any) => {
    const description = this.input.value;
    this.props.setCurrentPage(1);
    this.props.setFilter({description});
  }
  render() {
    return (
      <Col xs={4}>
        <div className="input-group">
          <FormControl
            type="text"
            inputRef={this.setInputRef}
          />
          <div className="input-group-btn">
            <Button onClick={this.setDescriptionFilter}>Поиск</Button>
          </div>
        </div>
      </Col>
    );
  }
}

const mapStateToProps = ({filter}: {filter: IFilter}) => ({filter});
export default connect(
  mapStateToProps,
  {setCurrentPage, setFilter}
)(Search);
