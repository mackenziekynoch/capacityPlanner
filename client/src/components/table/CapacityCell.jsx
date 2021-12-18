import React from 'react';

const CapacityCell = ({data, isEdit, role}) => {

  const inputComponent = constructInputType(role, data);
  return (
    <td className={role}>
      {!isEdit && data}
      {/* {isEdit && <input className={role} type={type} defaultValue={data}></input>} */}
      {isEdit && inputComponent}
    </td>
  );
};

const constructInputType = (role, data) => {
  let inputComponent;
  switch (role) {
    case 'startStatus':
    case 'currentStatus':
      inputComponent = (<select className={`capacityCell ${role}`} defaultValue={data}>
        <option value='backlogged'>Backlogged</option>
        <option value='todo'>To Do</option>
        <option value='inprogress'>In Progress</option>
        <option value='reqclientaction'>Requires Client Action</option>
        <option value='done'>Done</option>
      </select>);
      break;
    case 'workstream':
      inputComponent = (<select className={`capacityCell ${role}`} defaultValue={data}>
        <option value='piloyalty'>PI Loyalty</option>
        <option value='picei'>PI CEI</option>
        <option value='piqualtrics'>PI Qualtrics</option>
        <option value='wicei'>WI CEI</option>
        <option value='wiplannedsponsor'>WI Planned Sponsor</option>
      </select>);
      break;
    case 'tc':
    case 'tpm':
    case 'tl':
    case 'pl':
      inputComponent = (<select className={`capacityCell ${role}`} defaultValue={data}>
        <option value='mk'>MK</option>
        <option value='hb'>HB</option>
        <option value='jm'>JM</option>
        <option value='jd'>JD</option>
        <option value='ag'>AG</option>
        <option value='cl'>CL</option>
        <option value='kj'>KJ</option>
      </select>);
      break;
    default:
      inputComponent = <input className={`capacityCell ${role}`} type='text' defaultValue={data}></input>;
  };
  return inputComponent;
};

export default CapacityCell;