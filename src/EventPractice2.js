import React, { useState } from "react";

const EventPractice = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const onChangeUsername = e => setUsername(e.target.value);
  const onChangeMessage = e => setMessage(e.target.value);
  const onClick = e => {
    if (!username && !message) {
      alert("필수값을 입력 해주세요");
      setUsername("");
      setMessage("");
      return;
    }
    alert(username + ":" + message);
    setUsername("");
    setMessage("");
  };
  const onKeyPress = e => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>

      <input
        type="text"
        name="username"
        placeholder="사용자 명"
        value={username}
        onChange={onChangeUsername}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력 해 보세요."
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
