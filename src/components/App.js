import React from "react";
import AddTodo from "../containers/AddTodo";
import TodoList from "./TodoList";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./Homepage";
import About from "./About";
import SignupPage from "../pages/SignupPage";
import Main from "../pages/main";
const App = () => (
  <div>
    {/* <AddTodo/>
    <TodoList /> */}
    <BrowserRouter>
      <Route path="/home" component={Main} />
      <Route path="/homepage" component={Homepage} />
      <Route path="/about" component={About} />
      <Route path="/signup" component={SignupPage} />
    </BrowserRouter>
  </div>
);

export default App;
