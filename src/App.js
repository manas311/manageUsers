import React, { useState } from "react";
import AddUsers from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.floor(Math.random()*99999).toString()}];
    });
  };

  return (
    <>
      <AddUsers onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
};

export default App;
