import { useState, useMemo } from 'react';
import Header from './components/Header';
import Table from './components/Table';
import Pagination from './components/Pagination';
import usePatients from './hooks/usePatients';
import usePagination from './hooks/usePagination';

function App() {
  const [query, setQuery] = useState('');
  const { patients } = usePatients();
  const { jumpTo, currentData, currentPage, totalPages } = usePagination(
    patients
  );

  const currentPageList = currentData();

  const data = useMemo(
    () =>
      query
        ? currentPageList?.filter(({ FirstName, LastName }) =>
            `${FirstName.toLowerCase()} ${LastName.toLowerCase()}`.includes(
              query
            )
          )
        : currentPageList,
    [query, currentPageList]
  );

  return (
    <div className='App'>
      <Header query={query} setQuery={setQuery} />
      {data && <Table patients={data} />}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        jumpTo={jumpTo}
      />
    </div>
  );
}

export default App;
