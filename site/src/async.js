import React, { Component } from 'react';
import Chips, { Chip } from '../../src'

const data = [
  'John doe',
  'Runy dev',
  'Kamal',
  'Amet',
  'binod',
  'chanchal',
  'dolly',
  'kamal Kr',
  'shree'
];

class AsyncExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: []
    }
  }

  fetchData(value) {
    return new Promise((resolve, reject) => {

      if(value.length >= 1){

        setTimeout(() => {
          let filtered = data.filter(opt => opt.toLowerCase().indexOf(value.toLowerCase()) !== -1);
          resolve(filtered);
        }, 1000);

      } else {
        resolve([]);
      }

    });
  }

  onChange = value => {
    this.setState({ value });
  }

  render() {
    return (
      <Chips
        value={this.state.value}
        onChange={this.onChange}
        placeholder="Type a Programming Language"
        fetchSuggestions={ this.fetchData.bind(this) }
        fetchSuggestionMin={ 3 }
        shouldRenderSuggestions={value => value.length >= 0}
        fromSuggestionsOnly={false} />
    );
  }
}

export default AsyncExample;
