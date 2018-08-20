import React, { PureComponent } from 'react';
import Person from './Person/Person'

class Persons extends PureComponent {
  constructor(props){
    super(props);
    console.log('[Persons.js] Inside Constructor', props);
  }

  componentWillMount(){
    console.log('[Persons.js] Inside ComponentWillMount() ')
  }

  componentDidMount(){
    console.log('[Persons.js] Inside ComponentDidMount() ')
  }

  componentWillReceiveProps(nextProps){
    console.log('[Update Persons.js] inside componentWillRecieveProps()')
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[Update Persons.js] Inside shouldCompnentUpdate()')
  //   return nextProps.persons !== this.props.persons || nextProps.clicked !== this.props.clicked ||
  //          nextProps.changed !== this.props.changed;
  //   // return true;
  // }

  componentWillUpdate(nextProps, nextState){
    console.log('[Update Persons.js] inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate(){
    console.log('[Update Persons.js] inside componentDidUpdate()');
  }

  render() {
    console.log('[Persons.js] inside render()')
    return this.props.persons.map((person, index) => {
      return <Person name={person.name} age={person.age}
        position={index} click={() => this.props.clicked(index)} key={person.id}
        changed={(event) => this.props.changed(event, person.id)}/>
    })
  }
}

export default Persons;