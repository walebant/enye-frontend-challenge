import { useEffect, useState, useMemo } from 'react';

const usePatients = (filter, query) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://api.enye.tech/v1/challenge/records');
        const {
          records: { profiles },
        } = await res.json();
        setData(profiles);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  // const patientsData = useMemo(() => {
  //   const currentPageData = currentData();
  //   if (query) {
  //     return currentPageData?.filter(({ FirstName, LastName }) =>
  //       `${FirstName.toLowerCase()} ${LastName.toLowerCase()}`.includes(query)
  //     );
  //   }
  //   return currentPageData;
  // }, [query, currentData]);

  let results;
  const onSearch = () =>
    data?.filter(({ FirstName, LastName }) =>
      `${FirstName.toLowerCase()} ${LastName.toLowerCase()}`.includes(query)
    );

  const filterByGender = () => {
    if (filter.gender) {
      if (filter.payment) {
        results = data?.filter(data => data.PaymentMethod === filter.payment);
      }
      results = data?.filter(data => data.Gender === filter.gender);
    }
  };

  const filteredData = useMemo(() => {
    let results = [];

    if (filter.payment) {
      if (filter.gender) {
        results = data?.filter(data => data.Gender === filter.gender);
      }
      results = data?.filter(data => data.PaymentMethod === filter.payment);
    }

    if (filter.gender) {
      if (filter.payment) {
        results = data?.filter(data => data.PaymentMethod === filter.payment);
      }
      results = data?.filter(data => data.Gender === filter.gender);
    }
    return results;
  }, [query, filter, data]);

  const myRes = filter.payment || filter.method || query ? filteredData : data;

  return { apiResult: data, myRes };
};

export default usePatients;
