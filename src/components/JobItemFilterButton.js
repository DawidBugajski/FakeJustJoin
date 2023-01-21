import React from 'react';

export default function JobItemFilterButton({ text, handleShowFilters }) {
  return (
    <button
      onClick={handleShowFilters}
      className='bg-gray-200 text-primary-color text-sm rounded-sm px-1.5 pt-[3px] mr-4 mb-4 font-bold hover:text-primary-bg hover:bg-primary-color'
    >
      {text}
    </button>
  );
}
