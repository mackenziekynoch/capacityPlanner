import React, {useState} from 'react';

const CapacityForm = ({data}) => {
  const [startStatus, setStartStatus] = useState(data.startStatus);
  const [currentStatus, setCurrentStatus] = useState(data.currentStatus);
  const [workstram, setWorkstream] = useState(data.workstram);
  const [project, setProject] = useState(data.project);
  const [description, setDescription] = useState(data.description);
  const [scopedEffortRemaining, setScopedEffort] = useState(data.scopedEffortRemaining);
  const [estimatedWeeksDelivery, setEstWeeksDelivery] = useState(data.estimatedWeeksDelivery);
  const [projectMgmtConstant, setProjectMgmtConstant] = useState(data.projectMgmtConstant);
  const weeklyPlannedCapacity = (scopedEffortRemaining * projectMgmtConstant / estimatedWeeksDelivery) / 40;
  const [tc, setTc] = useState(data.tc);
  const [tpm, setTpm] = useState(data.tpm);
  const [tl, setTl] = useState(data.tl);
  const [pl, setPl] = useState(data.pl);

  return (
    <form className='capacityForm'>
      <h2>Edit Project Details</h2>
      <hr />
      <h4>Status</h4>
      <label>Start Status:
        <select id='startStatus' name='startStatus' defaultValue={startStatus} onChange={setStartStatus}>
          <option value='backlogged'>Backlogged</option>
          <option value='todo'>To Do</option>
          <option value='reqclientaction'>Requires Client Action</option>
          <option value='inprogress'>In Progress</option>
          <option value='done'>Done</option>
        </select>
      </label>
      <label>Current Status:
        <select id='currentStatus' name='currentStatus' defaultValue={currentStatus} onChange={setCurrentStatus}>
          <option value='backlogged'>Backlogged</option>
          <option value='todo'>To Do</option>
          <option value='reqclientaction'>Requires Client Action</option>
          <option value='inprogress'>In Progress</option>
          <option value='done'>Done</option>
        </select>
      </label>
      <hr />
      <h4>Project Information</h4>
      <label>Workstream:
        <select id='workstream' name='workstream' defaultValue={workstram} onChange={setWorkstream}>
          <optgroup label='PI'>
            <option value='piloyalty'>PI Loyalty</option>
            <option value='picei'>PI CEI</option>
            <option value='piqualtrics'>PI Qualtrics</option>
          </optgroup>
          <optgroup label='WI'>
            <option value='wicei'>WI CEI</option>
            <option value='wiplannedsponsor'>WI Planned Sponsor</option>
          </optgroup>
        </select>
      </label>
      <label>Project:
        <input id='project' name='project' defaultValue={project} type='text' onChange={setProject}></input>
      </label>
      <label>Description:
        <input id='description' name='description' defaultValue={description} type='text' maxLength='300' onChange={setDescription}></input>
      </label>
      <hr />
      <h4>Scope &amp; Capacity</h4>
      <label>Scoped Effort Remaining:
        <input id='scopedEffortRemaining' name='scopedEffortRemaining' defaultValue={scopedEffortRemaining} type='number' onChange={setScopedEffort}></input>
      </label>
      <label>Estimated Weeks to Deliver:
        <input id='estimatedWeeksDelivery' name='estimatedWeeksDelivery' defaultValue={estimatedWeeksDelivery} type='number' onChange={setEstWeeksDelivery}></input>
      </label>
      <label>Project Management Capacity:
        <input id='projectMgmtConstant' name='projectMgmtConstant' defaultValue={projectMgmtConstant} type='number' step='0.5' onChange={setProjectMgmtConstant}></input>
      </label>
      <label>Weekly Planned Capacity:
        <input id='weeklyPlannedCapacity' name='weeklyPlannedCapacity' defaultValue={weeklyPlannedCapacity} type='number' readOnly='true'></input>
      </label>
      <hr />
      <h4>Teammate Roles</h4>
      <label>TC:
        <select id='tc' name='tc' defaultValue={tc} onChange={setTc}>
          <option value='ag'>AG</option>
          <option value='cl'>CL</option>
          <option value='hb'>HB</option>
          <option value='jd'>JD</option>
          <option value='jm'>JM</option>
          <option value='kj'>KJ</option>
          <option value='mk'>MK</option>
        </select>
      </label>
      <label>TPM:
        <select id='tpm' name='tpm' defaultValue={tpm} onChange={setTpm}>
          <option value='ag'>AG</option>
          <option value='cl'>CL</option>
          <option value='hb'>HB</option>
          <option value='jd'>JD</option>
          <option value='jm'>JM</option>
          <option value='kj'>KJ</option>
          <option value='mk'>MK</option>
        </select>
      </label>
      <label>TL:
        <select id='tl' name='tl' defaultValue={tl} onChange={setTl}>
          <option value='ag'>AG</option>
          <option value='cl'>CL</option>
          <option value='hb'>HB</option>
          <option value='jd'>JD</option>
          <option value='jm'>JM</option>
          <option value='kj'>KJ</option>
          <option value='mk'>MK</option>
        </select>
      </label>
      <label>PL:
        <select id='pl' name='pl' defaultValue={pl} onChange={setPl}>
          <option value='ag'>AG</option>
          <option value='cl'>CL</option>
          <option value='hb'>HB</option>
          <option value='jd'>JD</option>
          <option value='jm'>JM</option>
          <option value='kj'>KJ</option>
          <option value='mk'>MK</option>
        </select>
      </label>
    </form>
  );
};

export default CapacityForm;