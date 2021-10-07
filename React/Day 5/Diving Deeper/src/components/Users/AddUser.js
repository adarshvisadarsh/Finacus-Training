import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredname = nameInputRef.current.value;
    const entereduserage = nameInputRef.current.value;

    if (enteredname.trim().length === 0 || entereduserage.trim().length === 0) {
      setError({
        title: "Invalid input",
        content: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+entereduserage < 1) {
      setError({
        title: "Invalid Age",
        content: "Please enter a valid age (> 0 ).",
      });
      return;
    }
    props.onAddUser(enteredname, entereduserage);
    nameInputRef.current.value=('');
    ageInputRef.current.value=('');
  };

  const errorhandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          content={error.content}
          onerrorhandler={errorhandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
