import React, { Component } from "react";
// import PropTypes from "prop-types";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      fixedNumber: 0
    };
  }

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>{fixedNumber}</h2>
        {/* <button
          onClick={() => {
            this.setState(prevState => {
              return {
                number: prevState.number + 1
              };
            });
            this.setState(prevState => {
              return {
                number: prevState.number + 1
              };
            });
          }}
        > */}
        <button
          onClick={() => {
            //이렇게는 왜 안될까?
            // this.setState(prevState => {
            // return {
            //     number: prevState.number + 1,
            //     () => {
            //         console.log("호출");
            //         console.log(this.state);
            //     };
            //   }
            // });
            this.setState(
              {
                number: number + 1,
                fixedNumber: number + number + 1
              },
              () => {
                console.log("호출");
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
