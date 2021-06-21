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

function SignUp() {
  return (
    <AuthLayout>
      <FormBox>
        <HeaderContainer>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
          <Subtitle>
            Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.
          </Subtitle>
        </HeaderContainer>
        <form>
          <Input type="email" placeholder="Эл. адрес" />
          <Input type="text" placeholder="Имя и фамилия" />
          <Input type="text" placeholder="Имя пользователя" />
          <Input type="password" placeholder="Пароль" />
          <Button type="submit" value="Регистрация" />
        </form>
      </FormBox>
      <BottomBox cta="Есть аккаунт?" link={routes.home} linkText="Вход" />
    </AuthLayout>
  );
}
export default SignUp;
