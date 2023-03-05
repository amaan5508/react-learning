import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../UI/Button/Button";

const CourseInput = (props) => {
  const FormControl = styled.div`
    margin: 0.5rem 0;

    & label {
      font-weight: bold;
      display: block;
      margin-bottom: 0.5rem;
      color: ${props => (props.invalid ? 'red' : '')};
    }

    & input {
      display: block;
      width: 100%;
      border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
      background:  ${props => (props.invalid ? '#ff8dab' : 'transparent')};
      font: inherit;
      line-height: 1.5rem;
      padding: 0 0.25rem;
    }

    & input:focus {
      outline: none;
      background: #fad0ec;
      border-color: #8b005d;
    }
  `;

  const [enteredValue, setEnteredValue] = useState("");
  const [validity, setValidity] = useState(true);
  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setValidity(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setValidity(false);
    } else {
      props.onAddGoal(enteredValue);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={!validity}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
