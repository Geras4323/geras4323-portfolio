import React from 'react'

import { NavBar } from './NavBar';
import { Presentation } from './Presentation';
import { ProjectList } from './ProjectList';
import { CourseList } from './CourseList';
import { Personal } from './Personal';


function AppUI() {
  return (
    <React.Fragment>

      {/* <NavBar /> */}

      <Presentation />

      <ProjectList />

      <CourseList />

      <Personal />

    </React.Fragment>
  );
}

export { AppUI };