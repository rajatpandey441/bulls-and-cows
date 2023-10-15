import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0,
    };
  }

  componentDidMount() {
    this.timerInterval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }

  tick = () => {
    const { seconds, minutes, hours } = this.state;
    if (seconds === 59) {
      if (minutes === 59) {
        this.setState({ hours: hours + 1, minutes: 0, seconds: 0 });
      } else {
        this.setState({ minutes: minutes + 1, seconds: 0 });
      }
    } else {
      this.setState({ seconds: seconds + 1 });
    }
  };

  render() {
    const { hours, minutes, seconds } = this.state;

    return (
      <div>
        <h2>Timer</h2>
        <p>{String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</p>
      </div>
    );
  }
}

export default Timer;
