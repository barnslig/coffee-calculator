import { css } from "emotion";
import React, { useEffect, useRef } from "react";

import btn from "../styles/btn";
import visuallyHidden from "../styles/visuallyHidden";

const Method = ({ children, checked, value, onChange, ...props }) => {
  const $root = useRef(null);

  useEffect(() => {
    if (checked) {
      $root.current.offsetParent.scrollTo({
        left: $root.current.offsetLeft,
        behavior: "smooth",
      });
    }
  }, [checked]);

  return (
    <label
      ref={$root}
      className={css`
        ${btn};
        align-items: center;
        display: flex;
        flex-direction: column;
        flex: 0 0 150px;
        justify-content: center;
        position: relative;
        scroll-snap-align: center;
        width: 150px;

        ${checked &&
        `
          opacity: 1;
        `}
      `}
      onClick={(ev) => {
        ev.preventDefault();
        onChange(value);
      }}
    >
      <input
        type="radio"
        className={css`
          ${visuallyHidden}
        `}
        checked={checked}
        onChange={() => onChange(value)}
        {...props}
      />

      <span
        className={css`
          display: block;
          margin: 20px;
        `}
      >
        {children}
      </span>
    </label>
  );
};

export default Method;
