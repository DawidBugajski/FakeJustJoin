import React from 'react';
import DeleteCategoryButton from './DeleteCategoryButton';
import { motion } from 'framer-motion';

export default function FilterableJobs({
  filters,
  handleDeleteFilter,
  setFilters,
  setShowFilters,
}) {
  const handleResetFiltersState = () => {
    setFilters([]);
    setShowFilters(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.2 }}
      className='flex justify-between bg-white w-10/12 mx-auto text-primary-color text-center font-bold rounded-lg shadow-lg  py-3 px-4 items-center relative -mt-16 xl:w-[65%]'
    >
      <div className='flex flex-wrap'>
        {filters.map((filter) => (
          <DeleteCategoryButton
            text={filter}
            key={filter}
            handleDeleteFilter={handleDeleteFilter}
          />
        ))}
      </div>
      <span
        className='hover:cursor-pointer hover:underline'
        onClick={handleResetFiltersState}
      >
        Clear
      </span>
    </motion.div>
  );
}
