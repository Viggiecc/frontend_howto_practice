import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timeID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timeID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Hello {this.props.name}</h1>
        <h2>Current Time is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Clock name="React" />
      <Clock name="Angular" />
    </div>
  )
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
