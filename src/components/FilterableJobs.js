import React from 'react';
import DeleteCategoryButton from './DeleteCategoryButton';
import { useState } from 'react';

export default function FilterableJobs() {
  const [filter, setFilters] = useState([]);

  return (
    <div className='flex justify-between bg-white w-10/12 mx-auto text-primary-color text-center font-bold rounded-lg shadow-lg  py-3 px-4 items-center relative -mt-16'>
      <div className='flex flex-wrap'>
        <DeleteCategoryButton />
        <DeleteCategoryButton />
        <DeleteCategoryButton />
        <DeleteCategoryButton />
        <DeleteCategoryButton />
      </div>
      <span>Clear</span>
    </div>
  );
}
