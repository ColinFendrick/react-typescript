import * as React from 'react';

export default class Counter extends React.Component {
  state = { count: 0 };

  increment = () => this.setState({ count: (this.state.count + 1) });
  
  decrement = () => this.setState({ count: (this.state.count - 1) });

  render() {
    const { state: { count }, increment, decrement } = this;
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  };
};