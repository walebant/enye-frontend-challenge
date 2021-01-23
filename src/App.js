import { useState, useMemo } from 'react';
import Header from './components/Header';
import Table from './components/Table';
import Pagination from './components/Pagination';
import Filter from './components/Filter';
import usePatients from './hooks/usePatients';
import usePagination from './hooks/usePagination';

function App() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState({
    payment: '',
    gender: '',
  });

  const { apiResult, myRes } = usePatients(filter, query);

  const { jumpTo, currentData, currentPage, totalPages } = usePagination(myRes);

  // const patientsData = useMemo(() => {
  //   const currentPageData = currentData();
  //   if (query) {
  //     return currentPageData?.filter(({ FirstName, LastName }) =>
  //       `${FirstName.toLowerCase()} ${LastName.toLowerCase()}`.includes(query)
  //     );
  //   }
  //   return currentPageData;
  // }, [query, currentData]);

  const res = currentData();
  return (
    <div>
      <Header query={query} setQuery={setQuery} />
      <section className='Main-content'>
        {res ? (
          <>
            <Filter filter={filter} setFilter={setFilter} data={apiResult} />
            <Table patients={res} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              jumpTo={jumpTo}
            />
          </>
        ) : (
          <h2 className='loading'>Laoding... 🛏</h2>
        )}
      </section>
    </div>
  );
}

export default App;
