import JobItem from './JobItem';
import React from 'react';

export default function JobItemsList({
  data,
  handleShowFilters,
  filters,
  setFilters,
  setShowFilters,
}) {
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
