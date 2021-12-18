import React, {useState} from 'react';
import CapacityCell from './CapacityCell.jsx';
import _ from 'lodash';

const CapacityEntry = ({data}) => {
  return (
    <tr>
      {Object.entries(data).map((cellData, i) => {
        if (cellData[0] == 'id') return null;
        return <CapacityCell id={`${data.id}_${cellData[0]}`} role={cellData[0]} data={cellData[1]} key={cellData[0]} />
      })}
    </tr>
  );
};

export default CapacityEntry;