import React from 'react';
import CapacityTable from './CapacityTable.jsx';

import mockData from '../../../database/mockData.js';

const App = (props) => {
  return (
    <>
      <CapacityTable data={mockData} />
    </>
  );
};

export default App;