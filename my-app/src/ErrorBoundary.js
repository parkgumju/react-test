import React, { Component } from "react";

class ErrorBoundar extends Component {
  state = {
    error: false
  };

  componentDidCatch(error, info) {
    this.setState({
      error: true
    });
    console.log({ error, info });
  }

  render() {
    if (this.state.error) return <div>에러가 발생 하였습니다.</div>;
    return this.props.children;
  }
}

export default ErrorBoundar;
