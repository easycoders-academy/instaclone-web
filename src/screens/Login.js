import { isLoggedInVar } from "../apollo";

function Login() {
  return (
    <div>
      <h1>Войти в аккаунт</h1>
      <button onClick={() => isLoggedInVar(true)}>Войти</button>
    </div>
  );
}
export default Login;
