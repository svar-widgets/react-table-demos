import React, { useEffect, useState } from 'react';

export default function Button(props) {
  const {
    type = '',
    css = '',
    click,
    icon = '',
    disabled = false,
    title = '',
    text = '',
    onClick,
    children,
  } = props;
  const [buttonCss, setButtonCss] = useState();
  const handleClick = (ev) => {
    if (disabled) return;
    onClick && onClick();
    if (click) click(ev);
  };
  useEffect(() => {
    let cssType = type
      ? type
          .split(' ')
          .filter((a) => a !== '')
          .map((x) => 'wx-' + x)
          .join(' ')
      : '';
    setButtonCss(css + (css ? ' ' : '') + cssType);
  }, [type, css]);
  return (
    <>
      <button
        title={title}
        disabled={disabled}
        onClick={handleClick}
        className={
          `wx-button ${buttonCss}` +
          ' ' +
          (icon && (!children || !children) ? 'wx-icon' : '')
        }
      >
        {icon && <i className={icon} />}
        {children ? children : text}
      </button>
    </>
  );
}
