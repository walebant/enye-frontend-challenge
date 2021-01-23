import { useState, useMemo } from 'react';
import Header from './Header';
import Table from './Table';
import Pagination from './Pagination';
import Filter from './Filter';
import usePatients from '../hooks/usePatients';
import usePagination from '../hooks/usePagination';
import { Link } from 'react-router-dom';

function Homepage() {
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

export default Homepage;
