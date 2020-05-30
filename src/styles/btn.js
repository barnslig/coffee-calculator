import { css } from "@emotion/core";

const btn = css`
  background: #eee;
  border-radius: 4px;
  border: 1px #ccc solid;
  color: #333;
  cursor: pointer;
  display: block;
  font-size: 16px;
  line-height: 32px;
  margin: 5px;
  opacity: 0.5;
  padding: 0 15px;
  white-space: nowrap;

  &[aria-pressed="true"],
  &:hover {
    opacity: 1;
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export default btn;
