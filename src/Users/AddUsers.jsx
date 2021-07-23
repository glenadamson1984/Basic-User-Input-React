import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = ({ onAddUser }) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [isError, setIsError] = useState(false);
  const [errorDescription, setErrorDescription] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let name = nameInputRef.current.value;
    let age = ageInputRef.current.value;

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

    onAddUser(name, age);

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
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
            ref={nameInputRef}
            id="name"
            type="text"
            placeholder={"Enter your name"}
          />
          <label htmlFor={"age"}>Enter your age (years)</label>
          <input
            ref={ageInputRef}
            id="age"
            type="text"
            placeholder={"Enter your age"}
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
