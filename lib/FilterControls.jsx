import React, { Component } from 'react';

class FilterControls extends Component {
  constructor() {
    super();
    this.state = {
      userInputLimit: 0
    };
  }

  render() {
    return (
      <form>
        <input
          type="number"
          value={this.state.userInputLimit}
          onChange={e => {
            this.setState({
              userInputLimit: e.target.value
            });
          }}
        />
        <button
          onClick={e => {
            e.preventDefault();
            this.props.setListLimit(+this.state.userInputLimit);
          }}
        >
          SET FILTERS
        </button>
      </form>
    );
  }
}

export default FilterControls;
