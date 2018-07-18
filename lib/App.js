import React, { Component } from 'react';

import { triviaQuestions, categories } from './api.js';
import TriviaList from './TriviaList';
import FilterControls from './FilterControls';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      triviaQuestions: triviaQuestions || [],
      listLimit: 5
    };
    this.setListLimit = this.setListLimit.bind(this);
  }

  setListLimit(limit) {
    this.setState({
      listLimit: limit
    });
  }

  render() {
    return (
      <div>
        <h1>Trivia!</h1>
        <FilterControls setListLimit={this.setListLimit} />
        <TriviaList
          listLimit={this.state.listLimit}
          questions={this.state.triviaQuestions}
        />
      </div>
    );
  }
}
