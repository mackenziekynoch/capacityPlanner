import React, {useState} from 'react';
import CapacityCell from './CapacityCell.jsx';
import _ from 'lodash';

const CapacityEntry = ({data}) => {
  const [isEdit, setIsEdit] = useState(Object.keys(data).reduce((memo, key, i) => {
    memo[key] = false;
    return memo;
  }, {}));

  const [localData, setLocalData] = useState(data);

  const clickHandler = (e) => {
    let isEditCp = resetEditingState();
    isEditCp[e.target.className] = true;
    setIsEdit(isEditCp);
  };

  const resetEditingState = () => {
    const isEditCp = _.clone(isEdit);
      Object.keys(isEditCp).forEach(item => {
        isEditCp[item] = false;
      })
      return isEditCp;
  };

  const keyPressHandler = (e) => {
    if (e.key === 'Enter') {
      changeLocalData(e.target);
      const isEditCp = resetEditingState();
      setIsEdit(isEditCp);
    }
  };

  const changeLocalData = (target) => {
    const dataCp = _.clone(localData);
    dataCp[target.className] = target.value;
    setLocalData(dataCp);
  };

  return (
    <tr onClick={clickHandler} onKeyPress={keyPressHandler}>
      {Object.entries(localData).map((cellData, i) => {
        if (cellData[0] == 'id') return null;
        return <CapacityCell role={cellData[0]} data={cellData[1]} isEdit={isEdit[cellData[0]]} key={cellData[0]} />
      })}
    </tr>
  );
};

export default CapacityEntry;