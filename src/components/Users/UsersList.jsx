import React from "react";
import Card from "../UI/Card";
import classes from "./usersList.module.css";
import { AiOutlineDelete } from "react-icons/ai";

const UsersList = (props) => {
  return (
    <>
      <Card className={classes.users}>
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.age} years old){" "}
              <button
                className={classes.deleteBtn}
                onClick={() => props.onDeleteUser(user.id)}>
                <AiOutlineDelete />
              </button>
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
};

export default UsersList;
