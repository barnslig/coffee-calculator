import { css } from "@emotion/core";

const visuallyHidden = css`
  /* https://snook.ca/archives/html_and_css/hiding-content-for-accessibility */
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
`;

export default visuallyHidden;
