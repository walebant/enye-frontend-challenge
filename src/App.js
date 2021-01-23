import { useState } from 'react';
import Homepage from './containers/Homepage';
import Profile from './containers/Profile';
import Page404 from './containers/Page404';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [selectedPatient, setSelectedPatient] = useState(null);

  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Homepage setSelectedPatient={setSelectedPatient} />
        </Route>
        <Route path='/profile'>
          <Profile selectedPatient={selectedPatient} />
        </Route>
        <Route path='*'>
          <Page404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
