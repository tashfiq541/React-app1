import React from "react";
import classes from "./cockpit.module.css";

const cockpit = (props) => {
  const assignedClasses = [];
  let btnClasses = [classes.button];
  if (props.showPersons) {
    btnClasses.push(classes.red);
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(" ")}>This is realy working</p>
      <button className={btnClasses.join(" ")} onClick={props.clicked}>
        Switch Name
      </button>
    </div>
  );
};

export default cockpit;
