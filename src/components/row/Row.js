import React from 'react';

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

export default Row;