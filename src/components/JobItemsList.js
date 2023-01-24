import JobItem from './JobItem';
import React from 'react';
import { SpinnerCircularSplit } from 'spinners-react';

export default function JobItemsList({
  data,
  handleShowFilters,
  filters,
  setFilters,
  setShowFilters,
  error,
  status,
}) {
  if (status === 'loading') {
    return (
      <div className='flex justify-center'>
        <SpinnerCircularSplit
          size={90}
          thickness={100}
          speed={150}
          color='rgba(93, 165, 164, 1)'
          secondaryColor='rgba(255, 255, 255, 1)'
        />
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className='text-3xl font-bold text-center text-green-hover'>
        Error: {error.message}
      </div>
    );
  }

  let filteredData;
  if (filters.length === 0) {
    filteredData = data;
  } else {
    filteredData = data.filter((job) => {
      const jobRequirements = [
        job.role,
        job.languages,
        job.tools,
        job.level,
      ].flat();

      return filters.every((filter) => jobRequirements.includes(filter));
    });
  }
  // -1 means that element A should be before element B, and 1 means that element B should be after element A. If objects A and B meet the same condition (e.g., both are labeled "featured" and "new"), then the order is already set and there is no need to use -1 or 1. In the case where the first condition is met for object A and the second for B, then A comes first and B comes second, so -1 for A and 1 for B is used.

  filteredData.sort((jobA, jobB) => {
    if (jobA.featured && jobA.new) return -1;
    if (jobB.featured && jobB.new) return 1;
    if (jobA.new) return -1;
    return 0;
  });

  return (
    <div>
      {filteredData.map((job) => (
        <JobItem
          key={job.id}
          job={job}
          handleShowFilters={handleShowFilters}
          filters={filters}
          setFilters={setFilters}
          setShowFilters={setShowFilters}
        />
      ))}
    </div>
  );
}
