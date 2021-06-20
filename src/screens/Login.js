function Login({ setIsLoggedIn }) {
  return (
    <div>
      <h1>Войти в аккаунт</h1>
      <button onClick={() => setIsLoggedIn(true)}>Войти</button>
    </div>
  );
}
export default Login;
