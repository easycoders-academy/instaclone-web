import styled from "styled-components";
import { BaseBox } from "../shared";

const SFormBox = styled(BaseBox)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 35px 40px 25px 40px;
  margin-bottom: 15px;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    width: 100%;
  }
`;

function FormBox({ children }) {
  return <SFormBox>{children}</SFormBox>;
}

export default FormBox;
