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

class CustomChipThemeExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: []
    }
  }

  onChange = value => {
    this.setState({ value });
  }

  render() {
    return (
      <Chips
        value={this.state.value}
        onChange={this.onChange}
        chipTheme={{ chip: { margin: "3px", padding: 5, background: 'red' } }}
        createChipKeys={['a']}
        placeholder="Type a Programming Language"
        suggestions={data}
        shouldRenderSuggestions={value => value.length >= 0}
        fromSuggestionsOnly={false} />
    );
  }
}

export default CustomChipThemeExample;
