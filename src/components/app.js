import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../styles/app.css";

import Navbar from "./nav/navbar";
import Home from "./pages/home";
import AddQuiz from "./pages/addQuiz";
import NoMatch from "./pages/nomatch";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/addquiz" component={AddQuiz} />
            <Route path="*" component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
