import React, {useState} from 'react';
import CapacityEntry from './CapacityEntry.jsx';
import _ from 'lodash';

const CapacityTable = ({data}) => {
  const [localData, setLocalData] = useState(data);

  const handleAddition = (e) => {
    const keys = Object.keys(localData[0]);
    const nextDataPt = keys.reduce((memo, key) => {
      memo[key] = '';
      return memo;
    }, {});

    const dataCopy = _.clone(localData);
    dataCopy.push(nextDataPt);
    setLocalData(dataCopy);
  }
  return (
    <table id='capacity'>
      <thead>
        <tr>
          <th colSpan="12"></th>
          <th><button id='capacityAddNew' onClick={handleAddition}>+</button></th>
        </tr>
        <tr>
          <td>Project Status (Start of Month)</td>
          <td>Current Project Status</td>
          <td>Workstream</td>
          <td>Project</td>
          <td>Description</td>
          <td>Scoped Effort Remaining</td>
          <td>Estimated Weeks to Deliver</td>
          <td>Project Management (Constant)</td>
          <td>Weekly Planned Capacity</td>
          <td>TC</td>
          <td>TPM</td>
          <td>TL</td>
          <td>PL</td>
        </tr>
      </thead>
      <tbody>
        { localData.map(entry => <CapacityEntry key={entry.id} data={entry}/>) }
      </tbody>
    </table>
  );
};

export default CapacityTable;