import React, { useReducer } from "react";

function reducer(state, action) {
  console.log({
    ...state,
    [action.name]: action.value
  });

  return {
    // ...state 같은 의미
    name: state.name,
    nickname: state.nickname,
    [action.name]: action.value
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: ""
  });

  const { name, nickname, title } = state;
  const onChange = e => {
    console.log(e.target);
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
        <input name="title" value={title} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름 :</b>
          {name}
        </div>
        <div>
          <b>닉네임 :</b>
          {nickname}
        </div>
        <div>
          <b>제목 :</b>
          {title}
        </div>
      </div>
    </div>
  );
};

export default Info;
