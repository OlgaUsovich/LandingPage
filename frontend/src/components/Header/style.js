import styled from "styled-components";
import {ReactComponent as LogoIcon} from "../../assets/logo.svg";
import {Link} from "react-router-dom";
import {COLOR} from "../../ui";

export const HeaderContainer = styled.div`
    grid-area: header;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 955px;
`;

export const Logo = styled(LogoIcon)`
  width: 105px;
  height: 32px;
`;

export const LinksList = styled.ul`
  display: flex;
  gap: 50px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const StyledLink = styled(Link)`
  color: ${COLOR.BLACK};
  text-decoration: none;
  
  &:hover {
    color: ${COLOR.ORANGE};
    text-decoration: underline;
  }
`;

