function Home({ setIsLoggedIn }) {
  return (
    <div>
      <h1>Главная страница</h1>
      <button onClick={() => setIsLoggedIn(false)}>Выйти из аккаунта</button>
    </div>
  );
}
export default Home;
