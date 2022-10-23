import React from 'react';

import { Course } from './Course';

function CourseList() {
  return (
    <div id="courses" className="w-auto h-auto    bg-hero_bg">
      <div className="w-auto h-auto py-8 px-4 flex flex-col items-center space-y-8 bg-gradient-to-t from-white to-transparent">
        <p className="text-2xl text-white text-center font-bold   lg:text-3xl">Here are some of the online courses I took.</p>

        <section className="w-full h-auto space-y-4   md:grid md:grid-cols-2 md:space-y-0 md:gap-4   lg:grid lg:grid-cols-3 lg:space-y-0">
          <Course
            name="NEXT.js"
            image="https://static.platzi.com/media/achievements/piezas-profesional-nextjs_badge-c9a806c6-e240-45da-81da-c206b0611e84.png"
          />

          <Course
            name="Tailwind CSS"
            image="https://static.platzi.com/media/achievements/piezas-basico-tailwind_badge-e301d7b7-4227-42ff-8aa9-0e1ecbf4b4e1.png"
          />

          <Course
            name="React.js"
            image="https://static.platzi.com/media/achievements/badge-react-2018-0a41bdc5-e874-45c9-ac67-98294c898da4.png"
          />

          <Course
            name="API Consumption"
            image="https://static.platzi.com/media/achievements/image-0ca92613-cd68-4147-993c-751978c2a554.png"
          />

          <Course
            name="JavaScript Asynchronism"
            image="https://static.platzi.com/media/achievements/badge-asincro-js-9f17b092-47d0-4c8a-a59d-67714aa18db3.png"
          />

          <Course
            name="Regular Expressions"
            image="https://static.platzi.com/media/achievements/1301-97adc02b-c21c-46fc-b753-c50bf1a98f67.png"
          />

          <Course
            name="JavaScript OOP"
            image="https://static.platzi.com/media/achievements/intermedio-programacion-orientada-js-badge-b29243cc-39b1-4f4a-aec0-59f96f0412cd.png"
          />

          <Course
            name="Git & GitHub"
            image="https://static.platzi.com/media/achievements/badge-github-0b729570-934d-47d8-ba6b-610d7f15e0ec.png"
          />
        </section>

        <a href="https://platzi.com/p/german432/" target="_blank" className="w-4/5 h-14 text-black text-base font-extrabold flex justify-center items-center bg-transparent rounded-full border-2 border-primary shadow-md   hover:bg-primary hover:scale-105 hover:text-lg hover:text-white   transition-all duration-300 ease-in-out   md:w-3/5 md:text-lg md:hover:text-xl   lg:w-2/5">See more on Platzi</a>
      </div>
    </div>
  );
}

export { CourseList };