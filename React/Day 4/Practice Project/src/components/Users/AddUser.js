import React, {useState} from "react";
import Card from '../UI/Card';
import Button from '../UI/Button'
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUserName]=useState('');
  const [enteredAge, setEnteredAge]=useState('');


  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredAge);
  };

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  
  return (
    <Card className={classes.input}>
        <form Onsubmit={addUserHandler}>
            <label htmlfor="username">Username</label>
            <input id="username" type="text" onChange={usernameChangeHandler}/>
            <label htmlfor="age ">Age</label>
            <input id="age" type="number" onChange={ageChangeHandler}/>
            <Button type="submit">Add User</Button>
        </form>
    </Card>
  );
};

export default AddUser;
