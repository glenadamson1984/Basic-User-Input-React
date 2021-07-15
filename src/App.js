import React, { useState } from "react";
import AddUser from "./Users/AddUsers";
import UsersList from "./Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (name, age) => {
    setUsers((prevState) => [
      ...prevState,
      { name, age, id: Math.random().toString() },
    ]);
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
