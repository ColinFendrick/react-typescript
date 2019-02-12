import * as React from 'react';

import Count from './Count';

interface Props {}

interface State { count: number; }

export default class Counter extends React.Component<Props, State> {
  state: State = { count: 0 };

  increment = () => this.setState({ count: (this.state.count += 1) });
  decrement = () => this.setState({ count: (this.state.count -= 1) });

  render() {
    const { state: { count }, increment, decrement } = this;
    return (
      <div>
        <Count count={count} />
        <button onClick={increment}>Inc</button>
        <button onClick={decrement}>Dec</button>
      </div>
    );
  };
};
