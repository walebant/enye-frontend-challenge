import { useState } from 'react';

const usePagination = (data, itemsPerPage = 10) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = data && Math.ceil(data?.length / itemsPerPage);

  const currentData = () => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    // sort the data by firstName
    // add serial number to each object
    return data
      ?.sort((a, z) => (a.FirstName > z.FirstName ? 1 : -1))
      ?.map((p, idx) => ({ ...p, sn: idx + 1 }))
      ?.slice(begin, end);
  };

  const jumpTo = page => {
    const pageNumber = Math.max(1, page);
    setCurrentPage(() => Math.min(pageNumber, totalPages));
  };

  return { jumpTo, currentData, currentPage, totalPages };
};

export default usePagination;
