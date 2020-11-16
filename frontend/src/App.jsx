import React, { Suspense } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './Routes/Routes';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import './App.css';

function App() {
  return (
    <Router>
      <>
        <Suspense fallback={<div> </div>}>
          <Switch>
            {routes.map((route, key) => (
              // eslint-disable-next-line react/no-array-index-key
              <Route {...route} key={key} />
            ))}
          </Switch>
        </Suspense>
      </>
    </Router>
  );
}

export default App;
