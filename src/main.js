import React from 'react';
import { render } from 'react-dom'
import Chips from 'react-chips'

let items = ["John doe", "Runy dev", "Kamal", "binod", "chanchal"]

render(<Chips autoCompleteData={items}/>, document.getElementById("root"));
