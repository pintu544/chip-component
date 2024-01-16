import React, { Component } from 'react';
import Chips, { Chip } from '../../src'
import CustomChip from './CustomChip'

const data = [
  {name: 'John doe',email:'Johndoe@gmail.com', image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1705426493~exp=1705427093~hmac=361962760a46f6475f12486173b8c5d3f5a9872af37c1745af5b153ab6687a4d'},
  {name: 'Runy dev',email:'Runydev@gmail.com', image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1705426493~exp=1705427093~hmac=361962760a46f6475f12486173b8c5d3f5a9872af37c1745af5b153ab6687a4d' },
  {name: 'Kamal',email:'Kamal@gmail.com', image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1705426493~exp=1705427093~hmac=361962760a46f6475f12486173b8c5d3f5a9872af37c1745af5b153ab6687a4d' },
  {name: 'Amet',email:'Amet@gmail.com', image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1705426493~exp=1705427093~hmac=361962760a46f6475f12486173b8c5d3f5a9872af37c1745af5b153ab6687a4d' },
  {name: 'binod',email:'binod@gmail.com', image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1705426493~exp=1705427093~hmac=361962760a46f6475f12486173b8c5d3f5a9872af37c1745af5b153ab6687a4d' },
  {name: 'chanchal',email:'chanchal@gmail.com', image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1705426493~exp=1705427093~hmac=361962760a46f6475f12486173b8c5d3f5a9872af37c1745af5b153ab6687a4d' },
  {name: 'dolly',email:'dolly@gmail.com', image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1705426493~exp=1705427093~hmac=361962760a46f6475f12486173b8c5d3f5a9872af37c1745af5b153ab6687a4d' },
  {name: 'kamal Kr',email:'kamalkr@gmail.com', image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1705426493~exp=1705427093~hmac=361962760a46f6475f12486173b8c5d3f5a9872af37c1745af5b153ab6687a4d' },
  {name: 'shree',email:'shree@gmail.com', image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1705426493~exp=1705427093~hmac=361962760a46f6475f12486173b8c5d3f5a9872af37c1745af5b153ab6687a4d' },
];

class CustomExample extends Component {

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
        placeholder="Add new User"
      	suggestions={data}
        renderChip={(item) => (
          <CustomChip image={item.image} email={item.email}>{item.name}</CustomChip>
        )}
        fromSuggestionsOnly={true}
        renderSuggestion={(item, { query }) => (
          <div
            style={style}
            key={item.name}>
            <img src={item.image} width={24} height={24} style={{margin: 5}}/>{item.name} {item.email}
          </div>
        )}
        suggestionsFilter={(opt, val) => (
          opt.name.toLowerCase().indexOf(val.toLowerCase()) !== -1
        )}
        getSuggestionValue={suggestion => suggestion.name}
      	/>
    );
  }
}

const style = {
  display: "flex",
  alignItems: "center",
  padding: '2px 6px',
  cursor: 'default'
}

export default CustomExample;
