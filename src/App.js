import "./global.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Homepage } from "./pages/homepage";
import { Character } from "./pages/character";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/character">
          <Character />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
