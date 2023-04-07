import React from 'react';

function Preloader() {
  return (
    <div className="spinner-border text-warning" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

export default Preloader;
