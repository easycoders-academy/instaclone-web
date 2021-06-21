import styled from "styled-components";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import routes from "../routes";
import AuthLayout from "../components/auth/AuthLayout";
import Button from "../components/auth/Button";
import Separator from "../components/auth/Separator";
import Input from "../components/auth/Input";
import FormBox from "../components/auth/FormBox";
import BottomBox from "../components/auth/BottomBox";
import { useState } from "react";

const FacebookLogin = styled.div`
  color: #385185;
  span {
    margin-left: 5px;
    font-weight: 600;
  }
`;

function Login() {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const onUsernameChange = (event) => {
    setUsernameError("");
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "") {
      setUsernameError("Введите имя пользователя");
    } else if (username.length < 10) {
      setUsernameError("Слишком короткое имя пользователя");
    } else {
      console.log(username);
    }
  };

  return (
    <AuthLayout>
      <FormBox>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </div>
        {usernameError}
        <form onSubmit={handleSubmit}>
          <Input
            onChange={onUsernameChange}
            value={username}
            type="text"
            placeholder="Имя пользователя"
          />
          <Input type="password" placeholder="Пароль" />
          <Button
            type="submit"
            value="Войти"
            disabled={(username === "") & (username.length < 10)}
          />
        </form>
        <Separator />
        <FacebookLogin>
          <FontAwesomeIcon icon={faFacebookSquare} />
          <span> Войти через Facebook</span>
        </FacebookLogin>
      </FormBox>
      <BottomBox
        cta="У вас ещё нет аккаунта?"
        link={routes.signUp}
        linkText="Зарегистрироваться"
      />
    </AuthLayout>
  );
}
export default Login;
