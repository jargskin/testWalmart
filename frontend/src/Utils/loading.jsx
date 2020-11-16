import React from 'react';

const Loading = ({ text }) => (
  <div className="container">
    <div className="row">
      <div className="text-center w-100">
        <div className="spinner-border text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p>{text}</p>
      </div>
    </div>
  </div>
);

export default Loading;
