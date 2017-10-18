import React from 'react';
import Async from './Async';

class ClassDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.countUp = this.countUp.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  componentWillMount() {
    console.log('componentWillMount!');
  }

  componentDidMount() {
    console.log('componentDidMount!');
  }

  render() {
    console.log('render!');

    return (
      <div>
        <h3>Count is: {this.state.count}</h3>
        <button onClick={this.countUp}>Up</button>
        <button onClick={this.countDown}>Down</button>
        <Async guy="the buddz"/>
      </div>
    );
  }

  countUp() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }

  countDown() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps! nextProps:', nextProps);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate! nextProps:', nextProps, ' nextState:', nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate! nextProps:', prevProps, ' nextState:', prevState);
  }
}

export default ClassDemo;
