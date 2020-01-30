import React, { useReducer } from "react";

function reducer(state, action) {
  console.log(state);
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return false;
  }
}

const Counter = () => {
  const [state, setValue] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b> 입니다.
      </p>
      <button onClick={() => setValue({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => setValue({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default Counter;
