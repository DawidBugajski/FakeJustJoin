import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import JobItemsList from './components/JobItemsList';
import FilterableJobs from './components/FilterableJobs';

export default function App() {
  const [data, setData] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState([]);

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

  // TODO => change on react query
  useEffect(() => {
    axios
      .get('https://demo1940091.mockable.io')
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='bg-primary-bg pb-10 h-screen overflow-auto'>
      <img
        className='w-full h-[150px] bg-repeat-x bg-primary-color mb-8'
        src='/images/bg-header-mobile.svg'
        alt='waves'
      />
      {showFilters === true && (
        <FilterableJobs
          handleDeleteFilter={handleDeleteFilter}
          filters={filters}
          setFilters={setFilters}
          setShowFilters={setShowFilters}
        />
      )}
      <JobItemsList
        data={data}
        handleShowFilters={handleShowFilters}
        filters={filters}
        setFilters={setFilters}
        setShowFilters={setShowFilters}
      />
    </div>
  );
}

/*
 - After Click on Job Category generate DeleteButton [✅]
  - Make function that provides from generating same names [✅]
  - After clicking on "X" delete from state [✅]
  - Make function that will clear all from state [✅]
  - Click on senior frontend developer => generate senior, frontend IF IS NOT ALREADY, if part is already on filterable, [✅]
  TODO FILTERING [✅]

*NICE TO HAVE:
- stylize for full rwd [🥵]
- after click on filterbutton from job move user to 1 job offer ( at this height ) [🥵]
- always render as first featured && new, second new, and then rest (ofc if filters are  correct [🥵]
- use React Query instead of useEffect [🥵]
- some error handling? [🥵]
*/
