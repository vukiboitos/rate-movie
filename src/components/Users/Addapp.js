import React, { useState,Fragment } from 'react';


import AddUser from './AddUser';
import UsersList from './UsersList';

function Addapp() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler= (uName,uAge)=>{
    setUsersList((prevUsersList)=>{
        return [...prevUsersList,
        {name:uName,age:uAge,id:Math.random().toString()}]
    })
  }


  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList  users={usersList} />
    </Fragment>
  );
}

export default Addapp;