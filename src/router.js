import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Pdf from './routes/IndexPage';

import Download from "./routes/Pdf.js";
import Pre from "./routes/previewPdf.js";
import PrePdf from './routes/PrePdf.js'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Pdf} />
        <Route path="/pdf" component={Download} />
        <Route path="/pre" component={Pre} />
        <Route path="/prepdf" component={PrePdf} />
      </Switch>

    </Router>
  );
}

export default RouterConfig;
