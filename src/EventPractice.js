import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    username: "",
    message: ""
  };
  //생성자를 만들어서 사용
  // constructor(props) {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleChange(e) {
  //   this.setState({
  //     message: e.target.value
  //   });
  // }

  // handleClick(e) {
  //   alert(this.state.message);
  //   this.setState({
  //     message: ""
  //   });
  // }

  //end 생성자를 만들어서 사용
  //transform class properties 방식
  // handleChange = e => {
  //   this.setState({
  //     message: e.target.value
  //   });
  // };

  // handleClick = () => {
  //   alert(this.state.message);
  //   this.setState({
  //     message: ""
  //   });
  // };
  //end transform class properties 방식
  //message 을 고정에서 유동적인 변수로 바꿈
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = () => {
    alert(this.state.username + ":" + this.state.message);
    this.setState({
      message: "",
      username: ""
    });
  };

  handleKeyPress = e => {
    console.log(e.key);
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>

        <input
          type="text"
          name="username"
          placeholder="사용자 명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력 해 보세요."
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
        {/* <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요."
          onChange={e => {
            this.setState({
              message: e.target.value
            });
          }}
        />
        <button
          onClick={() => {
            alert(this.state.message);
            this.setState({
              message: ""
            });
          }}
        >
          확인
        </button> */}
      </div>
    );
  }
}

export default EventPractice;
