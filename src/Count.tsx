import * as React from 'react';

const Count: React.FunctionComponent<{
  count: number;
}> = ({ count }) => {
  return <h1>{count}</h1>
};

export default Count;