import React from "react";
import classes from "./Person.module.css";

const Person = (props) => {
  return (
    <div className={classes.person}>
      <p onClick={props.click}>
        I'm {props.name} and my age is {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;
