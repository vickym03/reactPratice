import React, { Component } from 'react';
import withCounter from '../hoc/withCounter';

export  class CountTwo extends Component {

  render() {
      const { count,  incrementCount,   decrementCount} = this.props
    return <div>
     
        <p> Count -{count}</p>
        <button onClick={incrementCount}>  increment </button>
        <button onClick={ decrementCount}> decrement </button>
    </div>;
  }
}

export  default withCounter(CountTwo);