import { LogoutUser } from "../apollo";

function Home() {
  return (
    <div>
      <h1>Главная страница</h1>
      <button onClick={() => LogoutUser()}>Выйти из аккаунта</button>
    </div>
  );
}
export default Home;
