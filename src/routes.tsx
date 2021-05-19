import React from "react";
import { Route, Switch } from "react-router-dom";
//pages
import UserFeedback from "./pages/UserFeedback";
import CrashReports from "./pages/CrashReports";
import Blank from "./pages/Blank";
import Users from "./pages/Users";
import Analytics from "./pages/Analytics";
import NotFound from "./pages/NotFound";

export default (
  <Switch>
    <Route exact path="/" component={UserFeedback} />
    <Route exact path="/crash-reports" component={CrashReports} />
    <Route exact path="/blank" component={Blank} />
    <Route exact path="/users" component={Users} />
    <Route exact path="/analytics" component={Analytics} />
    <Route component={NotFound} />
  </Switch>
);
