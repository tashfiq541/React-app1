import React, { Component } from "react";
import classes from "./App.module.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "es01", name: "Emon", age: 23 },
      { id: "es02", name: "Muna", age: 21 },
      { id: "es03", name: "Tashfiq", age: 23 },
    ],
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    let persons = null;
    let btnClasses = [classes.button];

    if (this.state.showPersons) {
      persons = this.state.persons.map((person, index) => {
        return (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            click={() => this.deletePersonHandler(index)}
            changed={(event) => this.nameChangedHandler(event, person.id)}
          />
        );
      });
      btnClasses.push(classes.Red);
    }

    //
    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p>This is realy working</p>
        <button
          className={btnClasses.join(" ")}
          onClick={this.togglePersonHandler}
        >
          Switch Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
