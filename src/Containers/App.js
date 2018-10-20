import React, { Component } from 'react';
import classes from './App.css';

import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 'averx', name: "Syd", age: 36 },
      { id: 'screr', name: "Jessica", age: 34 },
      { id: 'wevwr', name: "Abby", age: 2 },
      { id: 'wer3v', name: "Harper", age: 1 },
      { id: 'wb4cs', name: "Changable", age: 99 }
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // Both of these approaches create a copy
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;

    if(this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />;
    }

    return (
      <div className={classes.App}>
        <Cockpit 
          showPersons={this.state.showPersons} 
          persons={this.state.persons} 
          clicked={this.togglePersonsHandler}/>
          {persons}
      </div>
    );
  }
}

export default App;