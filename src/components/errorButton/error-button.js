import React, {Component} from 'react';

export default class ErrorButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderError: false
    }
  }

  onError = () => {
    this.setState({renderError: true});
  }

  render() {
    if (this.state.renderError) {
      console.log('create error');
      return this.foo.bar = 0;
    }

    return (
      <button
        className={'btn btn-danger'}
        onClick={()=> this.onError()}>
        Throw Error
      </button>
    );
  }
};