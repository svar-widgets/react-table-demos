import React, { useState } from "react";

export default function Slider(props) {
  const {
    label = "",
    width = "",
    min = 0,
    max = 100,
    value = 1,
    step = 1,
    title = "",
    disabled = false,
    onChange,
  } = props;

  const [bgStyle, setBgStyle] = useState({});
  const [previous, setPrevious] = useState(-1);

  function updateStyles(x) {
    if (typeof x === "undefined") x = value;
    if (isNaN(x)) x = 0;

    const progress = ((x - min) / (max - min)) * 100 + "%";
    setBgStyle(() => {
      return disabled
        ? {}
        : {
            background: `linear-gradient(90deg, var(--wx-slider-primary) 0% ${progress}, var(--wx-slider-background) ${progress} 100%)`,
          };
    });

    if (previous !== x) {
      if (onChange) onChange({ value: x, previous, input: true });
      setPrevious(x);
    }
  }

  if (previous === -1) updateStyles(value);

  function change({ target }) {
    const v = target.value * 1;
    if (onChange) onChange({ value: v });
    updateStyles(v);
  }

  return (
    <div className="wx-slider" style={{ width: width }} title={title}>
      {label && <label>{label}</label>}
      <div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          onChange={change}
          value={value}
          style={bgStyle}
        />
      </div>
    </div>
  );
}
