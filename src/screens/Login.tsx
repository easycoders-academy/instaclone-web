import styled from "styled-components";
import { darkModeVar } from "../apollo";

interface IContainerProps{
  floating: boolean;
}

const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;

const Container = styled.div<IContainerProps>`
  box-shadow: ${props => props.floating ? "" : ""}
`;

function Login() {
  return (
    <Container floating={true}>
      <Title>Войти в аккаунт</Title>
      <button onClick={() => darkModeVar(true)}>Темная тема</button>
      <button onClick={() => darkModeVar(false)}>Светлая тема</button>
    </Container>
  );
}
export default Login;
