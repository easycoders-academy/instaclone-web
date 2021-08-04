import styled from "styled-components";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import routes from "../routes";
import AuthLayout from "../components/auth/AuthLayout";
import Button from "../components/auth/Button";
import Input from "../components/auth/Input";
import FormBox from "../components/auth/FormBox";
import BottomBox from "../components/auth/BottomBox";
import { BoldLink } from "../components/shared";
import PageTitle from "../components/PageTitle";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import FormError from "../components/auth/FormError";
import { useHistory } from "react-router-dom";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Subtitle = styled(BoldLink)`
  margin-top: 20px;
  font-size: 16px;
  text-align: center;
`;

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $firstName: String!
    $lastName: String
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      ok
      error
    }
  }
`;

function SignUp() {
  const history = useHistory();

  const onCompleted = (data) => {
    const {
      createAccount: { ok, error },
    } = data;
    if (!ok) return setError("result", { message: error });
    const { username, password } = getValues();
    history.push(routes.home, {
      message: "Пользователь зарегистрирован. Пожалуйста, войдите в аккаунт",
      username,
      password,
    });
  };

  const { register, handleSubmit, formState, setError, getValues } = useForm({
    mode: "onBlur",
  });
  const [signUp, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
    onCompleted,
  });

  const onSubmitValid = (data) => {
    if (loading) return;
    signUp({
      variables: {
        ...data,
      },
    });
  };

  return (
    <AuthLayout>
      <PageTitle title="Регистрация" />
      <FormBox>
        <HeaderContainer>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
          <Subtitle>
            Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.
          </Subtitle>
        </HeaderContainer>
        <form onSubmit={handleSubmit(onSubmitValid)}>
          <Input
            {...register("email", {
              required: "Email обязателен для заполнения",
            })}
            type="email"
            placeholder="Эл. адрес"
            hasError={Boolean(formState.errors?.email?.message)}
          />
          <FormError message={formState.errors?.email?.message} />
          <Input
            {...register("firstName", {
              required: "Имя обязательно для заполнения",
            })}
            type="text"
            placeholder="Имя"
            hasError={Boolean(formState.errors?.firstName?.message)}
          />
          <FormError message={formState.errors?.firstName?.message} />
          <Input
            {...register("lastName")}
            type="text"
            placeholder="Фамилия"
            hasError={Boolean(formState.errors?.lastName?.message)}
          />
          <FormError message={formState.errors?.lastName?.message} />
          <Input
            {...register("username", {
              required: "Имя пользователя обязательно для заполнения",
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
          <Button
            type="submit"
            value={loading ? "Загрузка..." : "Регистрация"}
            disabled={!formState.isValid || loading}
          />
          <FormError message={formState.errors?.result?.message} />
        </form>
      </FormBox>
      <BottomBox cta="Есть аккаунт?" link={routes.home} linkText="Вход" />
    </AuthLayout>
  );
}
export default SignUp;
