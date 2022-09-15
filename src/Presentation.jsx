import React from "react";

function Presentation() {
  return (
    <div className="w-full h-screen bg-hero_bg brightness-110  bg-cover p-8 flex flex-col justify-center items-center">
      <section className="justify-start space-y-12 text-4xl text-white">
        <p>Hello!</p>
        <p>I'm <b>Germán Göhringer</b></p>
        <p>Front-end developer</p>
      </section>
      <a href="#projects" className="absolute w-10 h-10 bottom-8 bg-black bg-opacity-50 rounded-full flex justify-center items-center shadow-lg   hover:bg-opacity-70 hover:scale-110   transition-all duration-200 ease-in-out">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-6 h-6 fill-current text-white">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" /></svg>
      </a>
    </div>
  );
}

export { Presentation };