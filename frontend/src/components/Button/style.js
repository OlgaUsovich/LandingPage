import styled from "styled-components";
import {COLOR} from "../../ui";

export const StyledButton = styled.button`
  width: 218px;
  height: 70px;
  background-color: ${props => props.filled ? COLOR.ORANGE: "transparent"};
  border-color: ${COLOR.ORANGE};
  color: ${props => props.filled ? COLOR.WHITE : COLOR.BLACK};
  font-family: 'Montserrat','sans-serif';
  font-size: 18px;
  cursor: pointer;
}
`;