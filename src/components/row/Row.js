import React from 'react';
import PropTypes from "prop-types";

const Row = ({ side, main }) => {
  return (
    <div className={'row mb-2'}>
      <div className={'col-md-4'}>
        { side }
      </div>
      <div className={'col-md-8'}>
        { main }
      </div>
    </div>
  );
};

Row.propTypes = {
  side: PropTypes.node,
  main: PropTypes.node
};

export default Row;