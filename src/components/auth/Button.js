import styled from "styled-components";

const Button = styled.input`
  width: 100%;
  margin-top: 15px;
  background-color: ${(props) => props.theme.accent};
  color: white;
  text-align: center;
  padding: 8px 0px;
  border: none;
  font-weight: 600;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;

export default Button;
