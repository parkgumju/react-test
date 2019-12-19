import React from "react";

const MyComponent = props => {
  // let div = "";
  // if (props.name) {
  //   div = <div>내 이름은 {props.name}입니다.</div>;
  // }

  // return <div>{div}</div>;

  return (
    <div>
      <h1>Hello!</h1>
      {props.name.length > 0 && <h2>You have {props.name} unread messages.</h2>}
    </div>
  );
};

export default MyComponent;
