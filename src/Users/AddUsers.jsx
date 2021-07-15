import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = ({ onAddUser }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorDescription, setErrorDescription] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (name.trim().length === 0 || age.trim().length === 0) {
      setIsError(true);
      setErrorDescription("Name and age cannot be empty");
      return;
    }

    if (+age < 1) {
      setIsError(true);
      setErrorDescription("Age has to be a number greater than zero");
      return;
    }

    setName("");
    setAge("");

    onAddUser(name, age);
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      {isError && (
        <ErrorModal
          onClose={() => setIsError(false)}
          title={"An Error Occurred"}
          description={errorDescription}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor={"name"}>Enter your name</label>
          <input
            id="name"
            type="text"
            placeholder={"Enter your name"}
            onChange={nameChangeHandler}
            value={name}
          />
          <label htmlFor={"age"}>Enter your age (years)</label>
          <input
            id="age"
            type="text"
            placeholder={"Enter your age"}
            onChange={ageChangeHandler}
            value={age}
          />
          <Button type={"button"} onClick={onSubmitHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
