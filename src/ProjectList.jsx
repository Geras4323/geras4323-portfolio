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
          p_name="iOS Calculator"
          description="Quick operations save time"
          langs={["React JS", "Tailwind CSS"]}
          repo="https://github.com/Geras4323/ios-calculator"
          page="https://ios-calculator-geras4323.vercel.app/"
          backgr="bg-calculator_sm"
        />

        <Project
          p_name="Yard Sale"
          description="Get yourself a present!"
          langs={["NEXT.js", "Tailwind CSS"]}
          repo="https://github.com/Geras4323/web-shop-next"
          page="https://web-shop-next-geras4323.vercel.app/"
          backgr="bg-sale_sm"
        />

        <Project
          p_name="Product Dashboard"
          description="Add, edit and remove products"
          langs={["NEXT.js", "Tailwind CSS", "- Tailwind UI -"]}
          repo="https://github.com/Geras4323/next-dashboard"
          page="https://next-dashboard-geras4323.vercel.app/"
          backgr="bg-dashboard_sm"
        />
      </section>

    </div>
  );
}

export { ProjectList };