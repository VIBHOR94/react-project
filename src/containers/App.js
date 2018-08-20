import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends PureComponent {
  constructor(props){
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        {id :'1', name: 'Max', age: '28'},
        {id :'2', name: 'Manu', age: '29'},
        {id :'3', name: 'Stephanie', age: '26'}
      ],
      showPersons: false
    }
  }

  componentWillMount(){
    console.log('[App.js] Inside ComponentWillMount() ')
  }

  componentDidMount(){
    console.log('[App.js] Inside ComponentDidMount() ')
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Update App.js] Inside shouldCompnentUpdate()')
  //   return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState){
    console.log('[Update App.js] inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate(){
    console.log('[Update App.js] inside componentDidUpdate()');
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
    console.log('[App.js] inside render')

    let persons = null;

    if(this.state.showPersons){
      persons = <Persons persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.switchChangeHandler}/>
    }

    return (
      <div className={classes.App}>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.toggleShowPersons}/>
        { persons }
      </div>
    );
  }
}

export default App;
