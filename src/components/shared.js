import styled from "styled-components";

export const BaseBox = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  width: 100%;
`;

export const BoldLink = styled.span`
  color: rgb(142, 142, 142);
  font-weight: 600;
`;

export const BoldText = styled.span`
  font-weight: 600;
`;
