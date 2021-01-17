import { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Table from './components/Table';

function App() {
  const [query, setQuery] = useState('');
  const [patients, setPatients] = useState(null);
  const [pages, setPages] = useState(0);

  const [error, setErrror] = useState(null);

  const data = useMemo(
    () =>
      query
        ? patients?.filter(({ FirstName, LastName }) =>
            `${FirstName.toLowerCase()} ${LastName.toLowerCase()}`.includes(
              query
            )
          )
        : patients,
    [query, patients]
  );

  useEffect(() => {
    fetch('https://api.enye.tech/v1/challenge/records')
      .then(res => res.json())
      .then(({ records: { profiles }, size }) => {
        setPatients(profiles);
        setPages(size);
      })
      .catch(e => setErrror(e));
  }, []);

  console.log({ patients, data });

  return (
    <div className='App'>
      <Header query={query} setQuery={setQuery} />
      {data && <Table patients={data} />}
    </div>
  );
}

export default App;
