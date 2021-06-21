import { isLoggedInVar } from "../apollo";

function Home() {
  return (
    <div>
      <h1>Главная страница</h1>
      <button onClick={() => isLoggedInVar(false)}>Выйти из аккаунта</button>
    </div>
  );
}
export default Home;
