import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Chips from './Chips';
import CustomChip from './CustomChip';

const suggestions = [
  'John doe',
  'Runy dev',
  'Kamal',
  'Amet',
  'binod',
  'chanchal',
  'dolly',
  'kamal',
  'shree'
];

const data = [
  {name: 'John doe', image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1705426493~exp=1705427093~hmac=361962760a46f6475f12486173b8c5d3f5a9872af37c1745af5b153ab6687a4d'},
  {name: 'Runy dev', image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1705426493~exp=1705427093~hmac=361962760a46f6475f12486173b8c5d3f5a9872af37c1745af5b153ab6687a4d' },
  {name: 'Kamal', image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1705426493~exp=1705427093~hmac=361962760a46f6475f12486173b8c5d3f5a9872af37c1745af5b153ab6687a4d' },
  {name: 'Amet', image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1705426493~exp=1705427093~hmac=361962760a46f6475f12486173b8c5d3f5a9872af37c1745af5b153ab6687a4d' },
  {name: 'binod', image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1705426493~exp=1705427093~hmac=361962760a46f6475f12486173b8c5d3f5a9872af37c1745af5b153ab6687a4d' },
  {name: 'chanchal', image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1705426493~exp=1705427093~hmac=361962760a46f6475f12486173b8c5d3f5a9872af37c1745af5b153ab6687a4d' },
  {name: 'dolly', image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1705426493~exp=1705427093~hmac=361962760a46f6475f12486173b8c5d3f5a9872af37c1745af5b153ab6687a4d' },
  {name: 'kamal Kr', image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1705426493~exp=1705427093~hmac=361962760a46f6475f12486173b8c5d3f5a9872af37c1745af5b153ab6687a4d' },
  {name: 'shree', image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1705426493~exp=1705427093~hmac=361962760a46f6475f12486173b8c5d3f5a9872af37c1745af5b153ab6687a4d' },
];

const fetchSuggestions = (value) => {
  return new Promise((resolve, reject) => {
    if(value.length >= 1){
      setTimeout(() => {
        let filtered = suggestions
          .filter(opt => opt.toLowerCase().indexOf(value.toLowerCase()) !== -1)
        resolve(filtered);
      }, 1000);
    } else {
      resolve([]);
    }
  });
};

storiesOf('Chips', module)
  // .add('Basic', () => (
  //   <Chips
  //     placeholder="add new user"
  //     suggestions={suggestions}
  //     fromSuggestionsOnly={false}
  //     highlightFirstSuggestion={true}
  //   />
  // ))
  // .add('Custom Chip Theme', () => (
  //   <Chips
  //       chipTheme={{ chip: { margin: "3px", padding: 5, background: 'red' } }}
  //       suggestions={suggestions}
  //       shouldRenderSuggestions={value => value.length >= 0}
  //       fromSuggestionsOnly={false} />
  // ))
  .add('Custom Chip', () => (
    <Chips
      placeholder="add new user"
      	suggestions={data}
        renderChip={(item) => (
          <CustomChip image={item.image}>{item.name}</CustomChip>
        )}
        fromSuggestionsOnly={true}
        renderSuggestion={(item, { query }) => (
          <div
            style={style}
            key={item.name}>
            <img src={item.image} width={24} height={24} style={{margin: 5}}/>{item.name}
          </div>
        )}
        suggestionsFilter={(opt, val) => (
          opt.name.toLowerCase().indexOf(val.toLowerCase()) !== -1
        )}
        getSuggestionValue={suggestion => suggestion.name}
    />
  ))
  // .add('Async', () => (
  //   <Chips
  //     placeholder="add new user"
  //     fetchSuggestions={fetchSuggestions}
  //   />
  // ));


const style = {
  display: "flex",
  alignItems: "center",
  padding: '2px 6px',
  cursor: 'default'
}