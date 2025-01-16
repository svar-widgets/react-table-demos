import React from 'react';


const Field = ({ label = "", position = "", width = "", error = false, type = "", children }) => {

  return (
    <div
      className={`wx-field wx-${position} ${error ? 'wx-error' : ''}`}
      style={width ? { width: width } : {}}
    >
      {label && <label>{label}</label>}
      <div className={`wx-field-control wx-${type}`}>
        {children}
      </div>
    </div>
  );
};

export default Field;