import React, {Component} from 'react';

import Spinner from "../spinner";
import ErrorMessage from "../error-message";

const withData = Wrapped => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null,
        error: false,
        loading: true
      };
    }

    update() {
      this.setState({
        error: false,
        loading: true
      });

      this.props.getData()
        .then(data => {
          this.setState({
            data,
            loading: false
          });
        })
        .catch(() => {
          this.setState({
            error: true,
            loading: false
          });
        });
    }

    componentDidMount() {
      this.update();
    }

    render() {
      const { data, loading, error } = this.state;

      if (loading) {
        return <Spinner />;
      }

      if (error) {
        return <ErrorMessage />;
      }

      return <Wrapped {...this.props} data={data}/>;
    }
  };
};

export default withData;