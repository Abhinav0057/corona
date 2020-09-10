import React from "react";

const Users = ({ name, email, website }) => {
  return (
    <div className="eachuser">
      <h1>{name}</h1>
      <h1>email:{email}</h1>
      <a href={website}>Website link : {website} </a>
    </div>
  );
};

export default Users;
