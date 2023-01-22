import React from 'react';
import JobItemRoles from './JobItemRoles';
import { GoPrimitiveDot } from 'react-icons/go';

export default function JobItem({ job, handleShowFilters }) {
  return (
    <div
      className={`mx-auto w-10/12 relative mt-12 mb-12 bg-white px-6 pt-5 pb-1 rounded-lg shadow-md ${
        job.featured ? 'border-l-4 border-primary-color' : ''
      }`}
    >
      <img
        className='logo-mobile'
        src={job.logo}
        alt={`Logo for ${job.company}`}
      />
      <div className='flex items-center justify-start mt-3 flex-wrap'>
        <h3 className='text-md font-bold text-primary-color '>{job.company}</h3>
        {job.new && (
          <p className='bg-primary-color text-white font-bold ml-4 text-sm rounded-xl px-1.5 pt-[3px] '>
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
        onClick={handleShowFilters}
        className='text-sm font-bold text-green-hover my-2 cursor-pointer hover:text-primary-color'
      >
        {job.position}
      </p>
      <div className='flex text-gray-400 items-center'>
        <p className='text-sm'>{job.postedAt}</p>
        <GoPrimitiveDot className='h-2' />
        <p className='text-sm'>{job.contract}</p>
        <GoPrimitiveDot className='h-2' />
        <p className='text-sm'>{job.location}</p>
      </div>
      <hr className='my-3' />
      <JobItemRoles
        roles={job.role}
        languages={job.languages}
        tools={job.tools}
        level={job.level}
        handleShowFilters={handleShowFilters}
      />
    </div>
  );
}
