import React from 'react';
import CapacityTable from './table/CapacityTable.jsx';
import ProjectNavigation from './projectNav/ProjectNavigation.jsx';

import mockData from '../../../database/mockData.js';

const App = (props) => {
  return (
    <>
      <ProjectNavigation />
      <CapacityTable data={mockData} />
    </>
  );
};

export default App;