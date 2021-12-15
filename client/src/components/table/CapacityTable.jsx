import React from 'react';
import CapacityEntry from './CapacityEntry.jsx';

const CapacityTable = ({data}) => {
  return (
    <table id='capacity'>
      <thead>
        <tr>
          <th colSpan="13"></th>
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
        { data.map(entry => <CapacityEntry key={entry.id} data={entry}/>) }
      </tbody>
    </table>
  );
};

export default CapacityTable;