import styled from "styled-components";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const WhiteBox = styled.div`
  background-color: white;
  border: 1px solid rgb(219, 219, 219);
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
    input {
      width: 100%;
      padding: 8px 7px;
      background-color: #fafafa;
      border: 0.5px solid rgb(219, 219, 219);
      margin-top: 5px;
      box-sizing: border-box;
      border-radius: 5px;
      &::placeholder {
        font-size: 12px;
      }
      &:last-child {
        margin-top: 15px;
        background-color: #0095f6;
        color: white;
        text-align: center;
        padding: 8px 0px;
        border: none;
        font-weight: 600;
      }
    }
  }
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
    background-color: rgb(219, 219, 219);
  }
  span {
    margin: 0 10px;
    font-weight: 600;
    color: #8e8e8e;
  }
`;

const BottomBox = styled(WhiteBox)`
  padding: 25px 0px;
  text-align: center;
  a {
    font-weight: 600;
    color: #2e9ef7;
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
            <input type="text" placeholder="Имя пользователя" />
            <input type="password" placeholder="Пароль" />
            <input type="submit" value="Войти" />
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
            У вас ещё нет аккаунта? <a href="#">Зарегистрироваться</a>
          </span>
        </BottomBox>
      </Wrapper>
    </Container>
  );
}
export default Login;
