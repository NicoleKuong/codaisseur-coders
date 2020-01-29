import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import DevelopersList from "./components/DevelopersList";
import Homepage from "./components/Homepage";
import Toolbar from "./components/Toolbar";
import PostPage from "./components/PostPage";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <Switch>
          <Route path="/read/:id" component={PostPage} />

          <Route path="/developers" component={DevelopersList} />
          <Route component={Homepage} />
        </Switch>
      </div>
    );
  }
}

//switch render only one route
