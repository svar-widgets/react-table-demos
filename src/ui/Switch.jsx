import React, { useState, useEffect } from 'react';

const Switch = ({ value = false, disabled = false, onChange = null }) => {
  const [checked, setChecked] = useState(value);

  useEffect(() => {
    setChecked(value);
  }, [value]);

  return (
    <label className="wx-switch">
      <input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={(e) => { 
          setChecked(e.target.checked) 
          if (onChange)
            onChange(e.target.checked);
        }}
      />
      <span />
    </label>
  );
};

export default Switch;
