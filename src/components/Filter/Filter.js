import { Component } from 'react';
import { s } from './Filter.module.css';

class Filter extends Component {
  handleChange = ({ target }) => {
    const { value } = target;

    this.props.changeFiler(value);
  };

  render() {
    const { filter } = this.props;

    return (
      <>
        <p>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          placeholder="Enter name"
          value={filter}
          onChange={this.handleChange}
        ></input>
      </>
    );
  }
}

export default Filter;
