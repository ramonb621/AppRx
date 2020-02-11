import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Title from "./components/Title";
import Home from "./pages/Home";
import Rec from "./pages/Rec";
import Oops from "./pages/Oops";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/meds" component={Home} />
          <Route exact path="/meds/:id" component={Rec} />
          <Route component={Oops} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;