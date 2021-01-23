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
        alert('An error occurred while loading patient records');
      }
    }
    fetchData();
  }, []);

  const filteredData = useMemo(() => {
    let results = [];

    if (query) {
      results = data?.filter(({ FirstName, LastName }) =>
        `${FirstName.toLowerCase()} ${LastName.toLowerCase()}`.includes(query)
      );
    }

    if (filter.payment) {
      results = data?.filter(data => data.PaymentMethod === filter.payment);
    }

    if (filter.gender) {
      results = data?.filter(data => data.Gender === filter.gender);
    }
    return results;
  }, [query, filter, data]);

  const myRes = filter.payment || filter.gender || query ? filteredData : data;

  return { apiResult: data, myRes };
};

export default usePatients;
