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
import { gql, useMutation } from "@apollo/client";
import { LoginUser } from "../apollo";
import { useLocation } from "react-router-dom";

const FacebookLogin = styled.div`
  color: #385185;
  span {
    margin-left: 5px;
    font-weight: 600;
  }
`;

const Notification = styled.div`
  color: #27ae60;
`;

const LOGIN_MUTATTION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ok
      error
      token
    }
  }
`;

function Login() {
  const location = useLocation();
  const onCompleted = (data) => {
    const {
      login: { ok, error, token },
    } = data;
    if (!ok) {
      return setError("result", { message: error });
    }
    if (token) {
      LoginUser(token);
    }
  };

  const [login, { loading }] = useMutation(LOGIN_MUTATTION, { onCompleted });
  const {
    register,
    handleSubmit,
    formState,
    getValues,
    setError,
    clearErrors,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      username: location?.state?.username || "",
      password: location?.state?.password || "",
    },
  });
  const onSubmitValid = (data) => {
    if (loading) return;
    const { username, password } = getValues();
    login({
      variables: {
        username,
        password,
      },
    });
  };

  const clearLoginErrors = () => {
    clearErrors("result");
  };

  return (
    <AuthLayout>
      <PageTitle title="Вход в аккаунт" />
      <FormBox>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </div>
        <Notification>{location?.state?.message}</Notification>
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
            onChange={clearLoginErrors}
            hasError={Boolean(formState.errors?.username?.message)}
          />
          <FormError message={formState.errors?.username?.message} />
          <Input
            {...register("password", {
              required: "Пароль обязателен для заполнения",
            })}
            type="password"
            placeholder="Пароль"
            onChange={clearLoginErrors}
            hasError={Boolean(formState.errors?.password?.message)}
          />
          <FormError message={formState.errors?.password?.message} />
          <Button
            type="submit"
            value={loading ? "Загрузка..." : "Войти"}
            disabled={!formState.isValid || loading}
          />
          <FormError message={formState.errors?.result?.message} />
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
