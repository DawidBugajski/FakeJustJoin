import React from 'react';
import JobItemFilterButton from './JobItemFilterButton';

export default function JobItemRoles({
  roles,
  languages,
  tools,
  level,
  handleShowFilters,
}) {
  return (
    <div className='flex flex-wrap md:justify-end md:mt-2 min-[900px]:basis-1/2 lg:basis-[60%]'>
      <JobItemFilterButton text={roles} handleShowFilters={handleShowFilters} />
      <JobItemFilterButton text={level} handleShowFilters={handleShowFilters} />
      {languages &&
        languages.map((language) => (
          <JobItemFilterButton
            key={language}
            text={language}
            handleShowFilters={handleShowFilters}
          />
        ))}
      {tools &&
        tools.map((tool) => (
          <JobItemFilterButton
            key={tool}
            text={tool}
            handleShowFilters={handleShowFilters}
          />
        ))}
    </div>
  );
}
