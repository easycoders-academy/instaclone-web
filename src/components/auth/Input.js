import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 8px 7px;
  background-color: #fafafa;
  border: 0.5px solid ${(props) => props.theme.borderColor};
  margin-top: 5px;
  box-sizing: border-box;
  border-radius: 5px;
  &::placeholder {
    font-size: 12px;
  }
`;

export default Input;
