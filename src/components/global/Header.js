import React, { useState, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { NavLink } from "react-router-dom";
import { Toggle } from "components/global";

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(
    to right,
    ${({ theme: { primaryColor } }) => primaryColor},
    ${({ theme: { secondaryColor } }) => secondaryColor}
  );
  border-bottom: 3px solid ${({ theme: { secondaryColor } }) => secondaryColor};
`;

const Menu = styled.nav`
  display: ${({ open }) => (open ? "block" : "none")};
  font-family: "Open Sans";
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  box-sizing: border-box;
  border-bottom: 3px solid ${({ theme: { secondaryColor } }) => secondaryColor};
  background-color: ${({ theme: { bodyBackgroundColor } }) =>
    bodyBackgroundColor};
  @media (min-width: 768px) {
    display: flex;
    background: none;
    left: initial;
    top: initial;
    margin: auto 0 auto auto;
    border-bottom: none;
    width: initial;
    position: relative;
  }
`;

const StyledLink = styled(NavLink)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  font-weight: normal;
  color: ${({ theme: { bodyFontColor } }) => bodyFontColor};
  &.active {
    font-weight: bold;
  }
`;

const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  padding: 5px;

  > div {
    height: 3px;
    background: ${({ theme: { bodyFontColor } }) => bodyFontColor};
    margin: 5px 0;
    width: 100%;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { id, setTheme } = useContext(ThemeContext);

  return (
    <HeaderWrapper>
      <MobileMenuIcon onClick={() => setMenuOpen(!menuOpen)}>
        <div />
        <div />
        <div />
      </MobileMenuIcon>
      <Menu open={menuOpen}>
        <StyledLink exact to="/">
          Home
        </StyledLink>
        <StyledLink to="/login">Login</StyledLink>
        <Toggle onToggle={setTheme} isActive={id === "dark"} />
      </Menu>
    </HeaderWrapper>
  );
}
