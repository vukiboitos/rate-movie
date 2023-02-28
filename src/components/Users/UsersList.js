import React from 'react';
import Cardd from '../ui/cardd';
import classes from './UsersList.module.css';

const UsersList = (props) => {
  return (
    <Cardd className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} stars)🌟🌟🌟🌟🌟🌟🌟
          </li>
        ))}
      </ul>
    </Cardd>
  );
};

export default UsersList;