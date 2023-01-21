import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import JobItemsList from './components/JobItemsList';
import FilterableJobs from './components/FilterableJobs';

export default function App() {
  const [data, setData] = useState([]);

  //show filters
  const [showFilters, setShowFilters] = useState(false);
  const handleShowFilters = () => {
    console.log('ADD BUTTON WHICH WAS CLICKED FROM JOB');
    setShowFilters(true);
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
      {showFilters === true && <FilterableJobs />}
      <JobItemsList data={data} handleShowFilters={handleShowFilters} />
    </div>
  );
}

// coś jest nie tak z pokazaniem tego jebanego diva, bo button nie ma ustawionego on click, ale nie mogę ustawić na komponent on click, a z kolei w przycisku nie mam dostępu do danych
