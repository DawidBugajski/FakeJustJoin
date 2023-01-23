import React from 'react';

export default function DeleteCategoryButton({ handleDeleteFilter, text }) {
  const handleDeleteCategory = () => {
    handleDeleteFilter(text);
  };

  return (
    <div className='flex text-md mt-[7px] mb-[7px]'>
      <span className='filterable-btn bg-gray-200'>{text}</span>
      <button
        onClick={handleDeleteCategory}
        className='filterable-btn-delete bg-primary-color hover:bg-green-hover'
      >
        <img src='/images/icon-remove.svg' alt='icon cross'></img>
      </button>
    </div>
  );
}
