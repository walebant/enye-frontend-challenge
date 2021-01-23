import { useState } from 'react';
import Homepage from './containers/Homepage';
import Profile from './containers/Profile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [selectedPatient, setSelectedPatient] = useState(null);

  // const patientsData = useMemo(() => {
  //   const currentPageData = currentData();
  //   if (query) {
  //     return currentPageData?.filter(({ FirstName, LastName }) =>
  //       `${FirstName.toLowerCase()} ${LastName.toLowerCase()}`.includes(query)
  //     );
  //   }
  //   return currentPageData;
  // }, [query, currentData]);

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
