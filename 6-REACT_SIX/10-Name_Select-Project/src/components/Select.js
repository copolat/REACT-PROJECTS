import React from 'react';
import { names } from './names';

export class Select extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.props.pickName(e.target.value)
  }
  render() {
    return (

      <div>
        <h1>Pickup a name :</h1>
        <select id="great-names" onChange = {this.handleChange}>
          {names.map(name => {
            return <option value={name}>{name}</option>
          })}
        </select>
      </div>
    );
  }
}