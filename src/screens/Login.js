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
import PageTitle from "../components/PageTitle";
import { useForm } from "react-hook-form";

const FacebookLogin = styled.div`
  color: #385185;
  span {
    margin-left: 5px;
    font-weight: 600;
  }
`;

function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmitValid = (data) => console.log(data);
  const onSubmitInvalid = (data) => console.log(data, "invalid");
  return (
    <AuthLayout>
      <PageTitle title="Вход в аккаунт" />
      <FormBox>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </div>
        <form onSubmit={handleSubmit(onSubmitValid, onSubmitInvalid)}>
          <Input
            {...register("username", {
              required: "Имя пользователя обязательно для заполнения",
              minLength: 10,
            })}
            type="text"
            placeholder="Имя пользователя"
          />
          <Input
            {...register("password", {
              required: "Пароль обязателен для заполнения",
            })}
            type="password"
            placeholder="Пароль"
          />
          <Button type="submit" value="Войти" />
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
