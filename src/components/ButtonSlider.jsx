import { css } from "emotion";
import React from "react";

const ButtonSlider = ({ children }) => (
  <div
    className={css`
      -webkit-overflow-scrolling: touch;
      display: flex;
      overflow: auto;
      position: relative;
      scroll-snap-type: x mandatory;

      @media (max-width: 600px) {
        margin: 0 -10px;
        padding: 0 10px;
      }
    `}
  >
    {children}
  </div>
);

export default ButtonSlider;
