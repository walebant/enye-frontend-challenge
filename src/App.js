import Homepage from './components/Homepage';
import Profile from './components/Profile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Homepage />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='*'>
          <h1>
            404{' '}
            <span role='image' aria-label='sorry'>
              😢
            </span>
          </h1>
          <p>Page Not Found</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
