import React from 'react';

const CapacityCell = ({data, role}) => {

  return (
    <td className={role}>
      {data}
    </td>
  );
};

export default CapacityCell;