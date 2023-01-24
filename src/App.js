import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import JobItemsList from 'components/JobItemsList';
import FilterableJobs from 'components/FilterableJobs';
import { AnimatePresence } from 'framer-motion';
import { useQuery } from 'react-query';

const fetchData = async () => {
  const response = await axios.get('https://demo1940091.mockable.io');
  return response.data;
};

export default function App() {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState([]);
  const { data, status, error } = useQuery('data', fetchData);

  const handleShowFilters = (e) => {
    setShowFilters(true);
    !filters.includes(e.target.innerHTML) &&
      setFilters([...filters, e.target.innerHTML]);
  };

  const handleDeleteFilter = (text) => {
    const newFilter = filters.filter((item) => item !== text);
    setFilters(newFilter);
    newFilter.length < 1 && setShowFilters(false);
  };

  return (
    <div className='h-screen pb-10 overflow-auto bg-primary-bg'>
      <img
        className='w-full h-[150px] bg-repeat-x bg-primary-color mb-8 md:hidden'
        src='/images/bg-header-mobile.svg'
        alt='waves'
      />
      <img
        className='w-full h-[150px] bg-repeat-x bg-primary-color mb-8 max-md:hidden'
        src='/images/bg-header-desktop.svg'
        alt='waves'
      />
      <AnimatePresence>
        {showFilters && (
          <FilterableJobs
            handleDeleteFilter={handleDeleteFilter}
            filters={filters}
            setFilters={setFilters}
            setShowFilters={setShowFilters}
          />
        )}
      </AnimatePresence>
      <JobItemsList
        data={data}
        handleShowFilters={handleShowFilters}
        filters={filters}
        setFilters={setFilters}
        setShowFilters={setShowFilters}
        error={error}
        status={status}
      />
    </div>
  );
}
