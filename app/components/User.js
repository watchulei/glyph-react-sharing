import React from 'react';

const User = (props) => {
  console.log('user props: ', props);
  return (
    <div>
      <h1>Welcome {props.match.params.name}!</h1>
    </div>
  );
};

export default User;
