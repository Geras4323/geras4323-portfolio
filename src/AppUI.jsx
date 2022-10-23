import React from 'react'

import { Switcher } from './Switcher';
import { Presentation } from './Presentation';
import { ProjectList } from './ProjectList';
import { CourseList } from './CourseList';
import { Personal } from './Personal';


function AppUI() {
  return (
    <React.Fragment>

      <Switcher />

      <Presentation />

      <ProjectList />

      <CourseList />

      <Personal />

    </React.Fragment>
  );
}

export { AppUI };