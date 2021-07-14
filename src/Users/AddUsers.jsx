import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor={"name"}>Enter your name</label>
        <input id="name" type="text" placeholder={"Enter your name"} />
        <label htmlFor={"age"}>Enter your age (years)</label>
        <input id="age" type="text" placeholder={"Enter your age"} />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
