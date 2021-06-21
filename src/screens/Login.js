import styled from "styled-components";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const WhiteBox = styled.div`
  background-color: white;
  border: 1px solid ${(props) => props.theme.borderColor};
  width: 100%;
`;

const TopBox = styled(WhiteBox)`
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

const Button = styled(Input)`
  margin-top: 15px;
  background-color: ${(props) => props.theme.accent};
  color: white;
  text-align: center;
  padding: 8px 0px;
  border: none;
  font-weight: 600;
`;

const Separator = styled.div`
  margin: 20px 0 30px 0;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  text-transform: uppercase;
  div {
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.borderColor};
  }
  span {
    margin: 0 10px;
    font-weight: 600;
    font-size: 12px;
    color: #8e8e8e;
  }
`;

const BottomBox = styled(WhiteBox)`
  padding: 25px 0px;
  text-align: center;
  a {
    font-weight: 600;
    color: ${(props) => props.theme.accent};
  }
`;

const Wrapper = styled.div`
  max-width: 350px;
  width: 100%;
`;

const FacebookLogin = styled.div`
  color: #385185;
  span {
    margin-left: 5px;
    font-weight: 600;
  }
`;

function Login() {
  return (
    <Container>
      <Wrapper>
        <TopBox>
          <div>
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </div>
          <form>
            <Input type="text" placeholder="Имя пользователя" />
            <Input type="password" placeholder="Пароль" />
            <Button type="submit" value="Войти" />
          </form>
          <Separator>
            <div></div>
            <span>или</span>
            <div></div>
          </Separator>
          <FacebookLogin>
            <FontAwesomeIcon icon={faFacebookSquare} />
            <span> Войти через Facebook</span>
          </FacebookLogin>
        </TopBox>
        <BottomBox>
          <span>
            У вас ещё нет аккаунта? <Link to="/sign-up">Зарегистрироваться</Link>
          </span>
        </BottomBox>
      </Wrapper>
    </Container>
  );
}
export default Login;
