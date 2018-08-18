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

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
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

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {
            this.state.persons.map( (person, index) => {
              return <Person name={person.name} age={person.age} click={() => this.deletePersonHandler(index) }/>
            })
          }
        </div>
      )
    }

    return (
      <div className="App">
        <h1>I am a react App</h1>
        <p> This is really working.</p>
        <button style={style} onClick={this.toggleShowPersons}>Switch name</button>
        { persons }
      </div>
    );
  }
}

export default App;
