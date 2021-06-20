import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <h1>Главная страница</h1>
          </Route>
          <Route path="/login">
            <h1>Войти в аккаунт</h1>
          </Route>
          <Route path="/test">
            <h1>Проверка</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
