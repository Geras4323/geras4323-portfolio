import React from "react";

function Project({
  p_name,
  description,
  langs,
  repo,
  page,
  backgr
}) {
  return (
    <div className="w-full h-64 shadow-lg rounded-xl p-4 flex flex-row bg-tertiary border border-border   md:h-128   lg:h-160">
      <section className="w-full h-full flex flex-row space-x-4 text-black   md:flex-col md:space-x-0 md:space-y-8">

        <a href={page} target="_blank" className={`w-1/2 h-full ${backgr} bg-cover bg-center border border-border rounded-xl shadow-md   hover:scale-105   transition-all duration-500 ease-in-out   md:w-full md:h-1/2 md:bg-top`}>
          <div className="w-full h-full flex flex-col justify-evenly items-center p-4 rounded-xl text-transparent font-semibold bg-black bg-opacity-10   hover:bg-opacity-70 hover:text-white   transition-all duration-500 ease-in-out">
            <p className="text-center   md:text-lg">{description}</p>
            <p className="text-lg   md:text-xl">Visit</p>
          </div>
        </a>

        <div className="w-1/2 h-full flex flex-col items-center justify-between   md:w-full md:h-1/2">
          <p className="text-3xl text-black font-semibold">{p_name}</p>
          <ul className="text-black text-xl flex flex-col items-center space-y-1   md:text-2xl">
            {langs.map(lang => <li>{lang}</li>)}
          </ul>
          <a href={repo} target="_blank" className="w-28 h-12 bg-tertiary border border-border shadow-md rounded-xl flex justify-center items-center   hover:bg-primary hover:border-tertiary hover:scale-110 hover:text-white   transition-all duration-300 ease-in-out   md:w-full md:h-12 md:text-lg md:hover:scale-105">View code</a>
        </div>

      </section>
    </div>
  );
}

export { Project };