import CardBlog from "../components/CardBlog";
import Navbar from "../components/Navbar";
import React from "react";import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";


const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={CardBlog} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
