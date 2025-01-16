import React, { useEffect, useRef } from 'react';
import { uid } from 'wx-lib-dom';

const TextInput = ({
  value = '',
  id = uid(),
  readonly = false,
  focus = false,
  select = false,
  type = 'text',
  placeholder = '',
  disabled = false,
  error = false,
  inputStyle = '',
  title = '',
  css = '',
  icon = '',
  onChange
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (icon && !css.includes('wx-icon-left')) {
      css = 'wx-icon-right ' + css;
    }
  }, [icon, css]);

  useEffect(() => {
    setTimeout(() => {
      if (focus && inputRef.current) inputRef.current.focus();
      if (select && inputRef.current) inputRef.current.select();
    }, 1);
  }, [focus, select]);

  const handleInput = event => {
    onChange && onChange({ value: event.target.value, input: true });
  };

  const handleChange = event => {
    onChange && onChange({ value: event.target.value });
  };

  return (
    <div className={`wx-text ${css}`} data-error={error} data-disabled={disabled}>
      <input
        ref={inputRef}
        id={id}
        readOnly={readonly}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        style={inputStyle}
        title={title}
        value={value}
        onInput={handleInput}
        onChange={handleChange}
      />
      {icon && <i className={`wx-icon ${icon}`} />}
    </div>
  );
};

export default TextInput;