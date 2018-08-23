import React, { Component }  from 'react'
import classes from './Person.css'
import withClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Aux'
import PropTypes from 'prop-types'


class Person extends Component {
  constructor(props){
    super(props);
    console.log('[Person.js] Inside Constructor', props);
    this.inputElement=React.createRef();
  }

  componentWillMount(){
    console.log('[Person.js] Inside ComponentWillMount() ')
  }

  componentDidMount(){
    console.log('[Person.js] Inside ComponentDidMount() ')
    if(this.props.position === 0){
      this.inputElement.current.focus();
    }
  }

  focus() {
    this.inputElement.current.focus();
  }

  render(){
    console.log('[Person.js] insider render()')
    return <Aux>
      <p onClick={this.props.click}>I'm a {this.props.name} and I'm {this.props.age} years old</p>
      <input type='text' onChange={this.props.changed} value={this.props.name}
        ref={this.inputElement}/>
      <p>{this.props.children}</p>
    </Aux>
    // return [
    //   <p key='1' onClick={this.props.click}>I'm a {this.props.name} and I'm {this.props.age} years old</p>,
    //   <input key='2' type='text' onChange={this.props.changed} value={this.props.name}/>,
    //   <p key='3'>{this.props.children}</p>
    // ]
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClass(Person, classes.Person);
