import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import JobItemsList from './components/JobItemsList';
import FilterableJobs from './components/FilterableJobs';

export default function App() {
  // generate job offers
  const [data, setData] = useState([]);

  //show filters
  const [showFilters, setShowFilters] = useState(false);

  const [filter, setFilter] = useState([]);

  const handleShowFilters = (text) => {
    setShowFilters(true);
    setFilter([...filter, text.target.innerHTML]);
    console.log(filter);
  };

  //fetch data and update state TODO: change on react query
  useEffect(() => {
    axios
      .get('https://demo1940091.mockable.io')
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='bg-primary-bg pb-10'>
      <img
        className='w-full h-[150px] bg-repeat-x bg-primary-color mb-8'
        src='/images/bg-header-mobile.svg'
        alt='waves'
      />
      {showFilters === true && (
        <FilterableJobs handleShowFilters={handleShowFilters} filter={filter} />
      )}
      <JobItemsList data={data} handleShowFilters={handleShowFilters} />
    </div>
  );
}

/*
 - After Click on Job Category generate DeleteButton
 może na handleShowFilter po kliknięciu będę aktualizował state nowy ten state przekażę w propsie do tamtego komponentu i będę po nim robił map?
*/
