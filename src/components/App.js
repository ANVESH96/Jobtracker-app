import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "./Homepage";
import About from "./About";
import SignupPage from "../pages/SignupPage";
import Main from "../pages/main";
const App = () => (
  <div>
    <BrowserRouter>
      <Route path="/home" component={Main} />
      <Route path="/alljobs" component={Homepage} />
      <Route path="/about" component={About} />
      <Route path="/signup" component={SignupPage} />
    </BrowserRouter>
  </div>
);

export default App;
