import React from 'react';

const ProjectNavigation = (props) => {

  return (
    <nav className='navbar projectnav'>
      <ol>
        <li className='navbaritem projectnavitem selected'><a href='#'>Project Table</a></li>
        <li className='navbaritem projectnavitem'><a href='#'>Workload</a></li>
        <li className='navbaritem projectnavitem'><a href='#'>Gantt Chart</a></li>
        <li className='navbaritem projectnavitem'><a href='#'>Backlog</a></li>
        <li className='navbaritem projectnavitem'><a href='#'>Options</a></li>
      </ol>
    </nav>
  );
};

export default ProjectNavigation;