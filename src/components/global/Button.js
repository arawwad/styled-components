import styled, { css } from "styled-components";
import { space } from "styled-system";
import {bool} from "prop-types";

const largeStyles = ({ large }) => {
  if (large) {
    return css`
      padding: 10px;
      border-radius: 5px;
      font-size: 1.5em;
    `;
  }
  return css`
    padding: 8px;
    border-radius: 4px;
    font-size: 1em;
  `;
};

const Button = styled.button`
  color: white;
  background: ${({ secondary, theme: { primaryColor, secondaryColor } }) =>
    secondary ? secondaryColor : primaryColor};
  font-weight: bold;
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  white-space: none;
  ${largeStyles}
  ${space}
  &:disabled {
    background: #eee;
    color: #666;
  }
`;

Button.propTypes = {
  large: bool.isRequired,
  secondary: bool.isRequired,
}

export { Button };
