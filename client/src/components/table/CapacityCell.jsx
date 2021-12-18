import React from 'react';

const CapacityCell = ({data, role, id}) => {

  return (
    <td className={role} id={id}>
      {data}
    </td>
  );
};

export default CapacityCell;