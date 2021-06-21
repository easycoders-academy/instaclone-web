import styled from "styled-components";

const SButton = styled.input`
  width: 100%;
  margin-top: 15px;
  background-color: ${(props) => props.theme.accent};
  color: white;
  text-align: center;
  padding: 8px 0px;
  border: none;
  font-weight: 600;
`;

function Button(props) {
  return <SButton {...props} />;
}

export default Button;
