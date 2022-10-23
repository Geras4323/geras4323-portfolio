import React from 'react';

function Course({
  name,
  image
}) {
  return (
    <div className="w-full h-20 px-3 shadow-lg bg-tertiary border border-border rounded-xl flex flex-row items-center   dark:bg-slate-700 dark:border-gray-600">

      <img src={image} className="h-4/5" />

      <p className="ml-8 text-xl font-semibold text-black   dark:text-gray-200">{name}</p>

    </div>
  );
}

export { Course };