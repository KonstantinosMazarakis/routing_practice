import './App.css';
import React from "react";
import {BrowserRouter,Link,Route,Switch} from "react-router-dom";
import Number from './components/number';

function App() {



  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route exact path="/"><h1>Welcome</h1></Route>
      <Route exact path="/:id"><Number></Number></Route>
      <Route exact path="/:id/:textColor"><Number></Number></Route>
      <Route exact path="/:id/:textColor/:bgColor"><Number></Number></Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
