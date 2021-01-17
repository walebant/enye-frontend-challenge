import { useEffect, useState } from 'react';

const usePatients = () => {
  const [patients, setPatients] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://api.enye.tech/v1/challenge/records');
        const {
          records: { profiles },
        } = await res.json();
        setPatients(profiles);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return { patients };
};

export default usePatients;
