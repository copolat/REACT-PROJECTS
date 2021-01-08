import React from 'react';
import { Select } from './Select';
import { Name } from './Name';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Coskun'
    } 
    this.changeName = this.changeName.bind(this)
  }

  changeName(setName) {
    this.setState({
      name: setName
    })
  }
 

  render() {
    return (
      <div>
        <Select pickName = {this.changeName}/>
        <Name name = {this.state.name}/>
      </div>
    );
  }
}

