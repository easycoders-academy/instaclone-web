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
import FormError from "../components/auth/FormError";

const FacebookLogin = styled.div`
  color: #385185;
  span {
    margin-left: 5px;
    font-weight: 600;
  }
`;

function Login() {
  const { register, handleSubmit, formState, setError } = useForm({ mode: "onChange" });
  const onSubmitValid = (data) => {
    //console.log(data);
  };

  return (
    <AuthLayout>
      <PageTitle title="Вход в аккаунт" />
      <FormBox>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </div>
        <form onSubmit={handleSubmit(onSubmitValid)}>
          <Input
            {...register("username", {
              required: "Имя пользователя обязательно для заполнения",
              minLength: {
                value: 5,
                message: "Имя пользователя должно быть длиннее 5 символов",
              },
            })}
            type="text"
            placeholder="Имя пользователя"
            hasError={Boolean(formState.errors?.username?.message)}
          />
          <FormError message={formState.errors?.username?.message} />
          <Input
            {...register("password", {
              required: "Пароль обязателен для заполнения",
            })}
            type="password"
            placeholder="Пароль"
            hasError={Boolean(formState.errors?.password?.message)}
          />
          <FormError message={formState.errors?.password?.message} />
          <Button type="submit" value="Войти" disabled={!formState.isValid} />
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
