import logo from "./logo.svg";
import "./App.css";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Article from "./Article.js";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/about"
          render={(props) => {
            console.log(props.match);
            return <h1>This is the about page</h1>;
          }}
        />
        <Route
          path="/article/:id"
          render={(props) => {
            console.log(props);
            return <Article id={props.match.params.id} />;
          }}
        />

        <Route path="*" render={(props) => {
          return <Redirect to="/" />
        }} />
      </Switch>
    </div>
  );
}

export default App;
