import React from "react";

import { Project } from "./Project";

function ProjectList() {
  return (
    <div id="projects" className="w-auto h-auto pt-8 mb-10 mx-4">
      <p className="text-2xl text-primary text-center font-bold   md:text-3xl">Take a look at some projects I've been working on.</p>

      <section className="my-4 flex flex-col items-center space-y-4   md:h-auto md:flex-row md:space-y-0 md:space-x-6 md:mt-6">
        <Project
          p_name="YouTravel"
          description="Feeling like traveling?"
          langs={["HTML", "Tailwind CSS"]}
          repo="https://github.com/Geras4323/tailwind-travel-site"
          page="https://geras4323.github.io/tailwind-travel-site/"
          backgr="bg-travel_sm"
        />

        <Project
          p_name="Task List"
          description="Need to remember some tasks?"
          langs={["React JS", "CSS"]}
          repo="https://github.com/Geras4323/task-list-react/tree/master"
          page="https://geras4323.github.io/task-list-react/"
          backgr="bg-task_sm"
        />

        <Project
          p_name="Yard Sale"
          description="Get yourself a present!"
          langs={["HTML", "CSS", "JavaScript"]}
          repo="https://github.com/Geras4323/frontend-js"
          page="https://geras4323.github.io/frontend-js/"
          backgr="bg-sale_sm"
        />
      </section>

    </div>
  );
}

export { ProjectList };