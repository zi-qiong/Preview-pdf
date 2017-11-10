import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Pdf from './routes/IndexPage';

import Download from "./routes/Pdf.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Pdf} />
        <Route path="/pdf" component={Download} />
      </Switch>

    </Router>
  );
}

export default RouterConfig;
