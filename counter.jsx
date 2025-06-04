import React, { Component } from 'react';

class Counter extends Component {
  // Initialization
  constructor(props) {
    super(props);
    console.log('1. Constructor - Initialization');
    this.state = { count: 0 };
  }

  // Mounting
  componentDidMount() {
    console.log('2. componentDidMount - Mounted');
  }

  // Updating
  componentDidUpdate() {
    console.log('3. componentDidUpdate - Updated');
  }

  // Unmounting
  componentWillUnmount() {
    console.log('4. componentWillUnmount - Unmounting');
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    console.log('render() called');
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  toggle = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div>
        <button onClick={this.toggle}>
          {this.state.show ? 'Hide' : 'Show'}
        </button>
        {this.state.show && <Counter />}
      </div>
    );
  }
}

export default Counter;
