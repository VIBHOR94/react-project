import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: '28'},
      {name: 'Manu', age: '29'},
      {name: 'Stephanie', age: '26'}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: '28'},
        {name: 'Manu', age: '29'},
        {name: 'Stephanie', age: '27'}
      ]
    })
  }

  toggleShowPersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  switchChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age: '28'},
        {name: event.target.value, age: '29'},
        {name: 'Stephanie', age: '27'}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>I am a react App</h1>
        <p> This is really working.</p>
        <button style={style} onClick={this.toggleShowPersons}>Switch name</button>
        { this.state.showPersons ?
          <div>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max!')} changed={this.switchChangeHandler}>My Hobbies: Racing</Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div>: null
        }
      </div>
    );
  }
}

export default App;
