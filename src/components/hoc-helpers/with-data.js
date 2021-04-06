import React, {Component} from 'react';

import Spinner from "../spinner";
import ErrorMessage from "../error-message";

const withData = (Wrapped, getData) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null
      };
    }

    componentDidMount() {
      getData()
        .then(data => {
          this.setState({
            data
          });
        });
    }

    render() {
      const { data } = this.state;

      if (!data) {
        return <Spinner />;
      }

      return <Wrapped {...this.props} data={data}/>;
    }
  };
};

export default withData;