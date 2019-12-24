import React from "react";
// import TOC from "./components/TOC";
// import Content from "./components/Content";
// import Subject from "./components/Subject";

// import MyComponent from "./MyComponent";
// import Counter from "./Counter";
// import Say from "./Say";
// import MyComponent from "./MyComponent";
// import EventPractice from "./EventPractice";
import EventPractice from "./EventPractice2";
// const App = () => {
//   return <MyComponent name="React" favoriteNumber={1}>태그안에 글</MyComponent>;
// }

// const App = () => {
//   return <Counter>버튼</Counter>;
// };

// const App = () => {
//   return <Say>버튼</Say>;
// };

// const App = () => {
//   return <MyComponent name="React" />;
// };
const App = () => {
  return <EventPractice />;
};

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       Subject: { title: "web", sub: "world wid web" },
//       contents: [
//         { id: 1, title: "HTML", desc: "HTML is for informaition" },
//         { id: 2, title: "CSS", desc: "CSS is for informaition" },
//         { id: 3, title: "JavaScript", desc: "JavaSript is for informaition" }
//       ]
//     };
//   }
//   render() {
//     return (
//       <div className="App">
//         <Subject
//           title={this.state.Subject.title}
//           sub={this.state.Subject.sub}
//         ></Subject>
//         <TOC data={this.state.contents}></TOC>
//         <Content title="HTML" desc="컨텐츠"></Content>
//       </div>
//     );
//   }
// }

export default App;
