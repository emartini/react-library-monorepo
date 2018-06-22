import React, { Component } from 'react';

export default class extends Component {
  state = {
    key: 'value'
  };

  render() {
    return <div>{this.state.key}</div>;
  }
}
