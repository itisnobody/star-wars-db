import React from 'react';

const ErrorMessage =() => {
  return (
    <div className={'error-message'}>
      <h1>BOOM!</h1>
      <span>
        something has gone terrible wrong
      </span>
      <span>
        (but we already sent droids to fix it)
      </span>
    </div>
  );
};

export default ErrorMessage;