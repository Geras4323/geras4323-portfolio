import React from 'react';

function Course({
  name,
  image
}) {
  return (
    <div className="w-full h-20 px-3 shadow-lg bg-tertiary border border-border rounded-xl flex flex-row items-center">

      <img src={image} className="h-4/5" />

      <p className="ml-8 text-xl font-semibold text-black">{name}</p>

    </div>
  );
}

export { Course };