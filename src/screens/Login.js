import { useState } from "react";
import styled, { css } from "styled-components";
import { isLoggedInVar } from "../apollo";

const Title = styled.h1`
  color: ${(props) => (props.test ? "blue" : "beige")};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  ${(props) =>
    props.test
      ? css`
          font-size: 50px;
        `
      : css`
          font-size: 20px;
        `}
`;

const Container = styled.div`
  background-color: tomato;
`;

const ToggleButton = styled.button`
  color: red;
`;

function Login() {
  const [test, setTest] = useState(false);
  const toggleSetTest = () => setTest((current) => !current);
  return (
    <Container>
      <Title test={test}>Войти в аккаунт</Title>
      <ToggleButton onClick={toggleSetTest}>Переключить!</ToggleButton>
    </Container>
  );
}
export default Login;
