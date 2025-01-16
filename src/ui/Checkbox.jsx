import React, { useEffect, useState } from "react";
import { uid } from "wx-lib-dom";

export default function Checkbox(props) {
  const {
    id = uid(),
    label = "",
    name = "",
    value: propValue = false,
    css = "",
    disabled = false,
    onChange,
  } = props;
  const [value, setValue] = useState(propValue);
  useEffect(() => setValue(propValue), [propValue]);
  function handlerChange({ target }) {
    let temp_value = value;
    setValue((temp_value = target.checked));
    onChange && onChange({ value: temp_value, name });
  }
  return (
    <>
      <div className={`wx-checkbox ${css}`}>
        <input
          type="checkbox"
          id={id}
          disabled={disabled}
          checked={value}
          value={name}
          onChange={handlerChange}
        />
        <label htmlFor={id}>
          <span />
          {label && <span>{label}</span>}
        </label>
      </div>
    </>
  );
}
