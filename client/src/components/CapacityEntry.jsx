import React from 'react';

const CapacityEntry = ({data}) => {
  return (
    <tr>
      <td>{data.startStatus}</td>
      <td>{data.currentStatus}</td>
      <td>{data.workstream}</td>
      <td>{data.project}</td>
      <td>{data.description}</td>
      <td>{data.scopedEffortRemaining}</td>
      <td>{data.estimatedWeeksDelivery}</td>
      <td>{data.projectMgmtConstant}</td>
      <td>{data.weeklyPlannedCapacity}</td>
      <td>{data.tc}</td>
      <td>{data.tpm}</td>
      <td>{data.tl}</td>
      <td>{data.pl}</td>
    </tr>
  );
};

export default CapacityEntry;