import React from 'react';

const CapacityCell = ({data, isEdit, role}) => {
  const type = typeof data;
  return (
    <td className={role}>
      {!isEdit && data}
      {isEdit && <input className={role} type={type} defaultValue={data}></input>}
    </td>
  );
};

export default CapacityCell;