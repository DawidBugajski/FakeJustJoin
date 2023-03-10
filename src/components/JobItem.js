import React from 'react';
import JobItemRoles from './JobItemRoles';
import { GoPrimitiveDot } from 'react-icons/go';
import { motion } from 'framer-motion';

export default function JobItem({
  job,
  handleShowFilters,
  setFilters,
  filters,
  setShowFilters,
}) {
  const handleAddFilter = (e) => {
    const splitPhrase = e.target.innerHTML.split(' ');
    const jobRequirements = [
      job.role,
      job.languages,
      job.tools,
      job.level,
    ].flat();

    let addToFilters = [];

    splitPhrase.forEach((word) => {
      if (jobRequirements.includes(word) && !filters.includes(word)) {
        addToFilters = [...addToFilters, word];
      }
      setShowFilters(true);
      setFilters([...filters, ...addToFilters]);
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.2 }}
      className={`mx-auto w-10/12 relative my-12 bg-white px-6 pt-5 pb-1 rounded-lg shadow-md md:my-6 xl:w-[65%]  ${
        job.featured ? 'border-l-4 border-primary-color' : ''
      }`}
    >
      <div className='md:flex md:justify-start md:items-center md:pb-4'>
        <img
          className='logo-mobile'
          src={job.logo}
          alt={`Logo for ${job.company}`}
        />
        <div className='md:mx-4 md:basis-1/2 min-[900px]:basis-1/3'>
          <div className='flex flex-wrap items-center justify-start mt-3 md:flex-nowrap'>
            <h3 className='font-bold text-md text-primary-color '>
              {job.company}
            </h3>
            {job.new && (
              <p className='bg-primary-color text-white font-bold ml-4 text-sm rounded-xl px-1.5 pt-[3px] md:ml-2'>
                NEW!
              </p>
            )}
            {job.featured && (
              <p className='bg-green-hover text-white font-bold ml-2 text-sm rounded-xl px-1.5 pt-[3px] '>
                FEATURED
              </p>
            )}
          </div>
          <p
            onClick={handleAddFilter}
            className='my-2 text-sm font-bold cursor-pointer text-green-hover hover:text-primary-color md:text-base md:my-1 lg:text-lg xl:text-xl'
          >
            {job.position}
          </p>
          <div className='flex items-center text-sm text-gray-400 md:flex-nowrap'>
            <p>{job.postedAt}</p>
            <GoPrimitiveDot className='h-2' />
            <p>{job.contract}</p>
            <GoPrimitiveDot className='h-2' />
            <p>{job.location}</p>
          </div>

          <hr className='my-3 md:hidden' />
        </div>
        <JobItemRoles
          roles={job.role}
          languages={job.languages}
          tools={job.tools}
          level={job.level}
          handleShowFilters={handleShowFilters}
        />
      </div>
    </motion.div>
  );
}
