import { css } from "emotion";
import React, { useEffect, useRef } from "react";

import btn from "../styles/btn";
import visuallyHidden from "../styles/visuallyHidden";

import ButtonSlider from "./ButtonSlider.jsx";

const AmountInputBtn = ({ onClick, ...props }) => {
  const $root = useRef(null);

  const onBtnClick = (ev) => {
    onClick(ev);

    $root.current.offsetParent.scrollTo({
      left: $root.current.offsetLeft - $root.current.offsetWidth / 2,
      behavior: "smooth",
    });
  };

  return (
    <button
      ref={$root}
      type="button"
      className={css`
        ${btn};
      `}
      onClick={onBtnClick}
      {...props}
    />
  );
};

const AmountInput = ({
  label,
  unit,
  amounts,
  amountValueKey,
  value,
  onChange,
}) => {
  const $input = useRef(null);

  /*useEffect(() => {
    $input.current.select();
  }, [value]);*/

  return (
    <div>
      <ButtonSlider>
        {amounts.map((amount) => {
          const ariaPressed = `${value === amount[amountValueKey]}`;
          const key = `${amount[amountValueKey]}-${ariaPressed}`;

          return (
            <AmountInputBtn
              key={key}
              onClick={() => onChange(amount[amountValueKey])}
              aria-pressed={ariaPressed}
            >
              {amount.title}
            </AmountInputBtn>
          );
        })}
      </ButtonSlider>

      <label>
        <span
          className={css`
            ${visuallyHidden}
          `}
        >
          {label}
        </span>

        <div
          className={css`
            display: flex;
            margin: 10px 0;
          `}
        >
          <input
            ref={$input}
            type="number"
            className={css`
              border-radius: 4px 0 0 4px;
              border: 1px #ccc solid;
              border-right: 0;
              display: block;
              font-size: 16px;
              line-height: 48px;
              padding-left: 15px;
              width: 100%;
            `}
            value={value}
            onChange={(ev) => onChange(ev.target.value)}
          />
          <div
            aria-hidden="true"
            className={css`
              align-items: center;
              border-radius: 0 4px 4px 0;
              border: 1px #ccc solid;
              border-left: 0;
              display: flex;
              padding: 0 15px;
            `}
          >
            {unit}
          </div>
        </div>
      </label>
    </div>
  );
};

export default AmountInput;
