import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id :'1', name: 'Max', age: '28'},
      {id :'2', name: 'Manu', age: '29'},
      {id :'3', name: 'Stephanie', age: '26'}
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  toggleShowPersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  switchChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    })

    const persons = [...this.state.persons];
    persons[personIndex].name = event.target.value;
    this.setState({persons: persons});
  }

  render() {

    let persons = null;
    const assignedClasses = [];
    let btnClass = '';

    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }

    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    if(this.state.showPersons){
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person name={person.name} age={person.age}
                click={() => this.deletePersonHandler(index)} key={person.id} changed={(event) => this.switchChangeHandler(event, person.id)}/>
            })
          }
        </div>
      )
      btnClass = classes.Red;
    }

    return (
      <div className={classes.App}>
        <h1>I am a react App</h1>
        <p className={assignedClasses.join(' ')}> This is really working.</p>
        <button className={btnClass} onClick={this.toggleShowPersons}>Switch name</button>
        { persons }
      </div>
    );
  }
}

export default App;
