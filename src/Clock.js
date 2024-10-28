/*
//Function-based prop:
function Clock(props) {
  return <h1>{props.date.toLocaleString()}</h1>;
}*/
import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return <h1>{this.state.date.toLocaleString()}</h1>;
  }
}

export default Clock;
