import JobItem from './JobItem';
import React from 'react';

export default function JobItemsList({ data, handleShowFilters }) {
  return (
    <div>
      {data.map((job) => (
        <JobItem key={job.id} job={job} handleShowFilters={handleShowFilters} />
      ))}
    </div>
  );
}
