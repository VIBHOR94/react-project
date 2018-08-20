import React, { Component }  from 'react'
import classes from './Person.css'
import withClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Aux'


class Person extends Component {
  constructor(props){
    super(props);
    console.log('[Person.js] Inside Constructor', props);
  }

  componentWillMount(){
    console.log('[Person.js] Inside ComponentWillMount() ')
  }

  componentDidMount(){
    console.log('[Person.js] Inside ComponentDidMount() ')
  }

  render(){
    console.log('[Person.js] insider render()')
    return <Aux>
      <p onClick={this.props.click}>I'm a {this.props.name} and I'm {this.props.age} years old</p>
      <input type='text' onChange={this.props.changed} value={this.props.name}/>
      <p>{this.props.children}</p>
    </Aux>
    // return [
    //   <p key='1' onClick={this.props.click}>I'm a {this.props.name} and I'm {this.props.age} years old</p>,
    //   <input key='2' type='text' onChange={this.props.changed} value={this.props.name}/>,
    //   <p key='3'>{this.props.children}</p>
    // ]
  }
}
export default withClass(Person, classes.Person);
