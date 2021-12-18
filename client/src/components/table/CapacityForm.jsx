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
  const weeklyPlannedCapacity = Math.round((scopedEffortRemaining * projectMgmtConstant / estimatedWeeksDelivery) / 40 * 100); // eventually pull from CONFIG
  const [tc, setTc] = useState(data.tc);
  const [tpm, setTpm] = useState(data.tpm);
  const [tl, setTl] = useState(data.tl);
  const [pl, setPl] = useState(data.pl);

  // eventually pull from CONFIG
  const allowableStatuses = ['Backlogged', 'To Do', 'Requires Client Action', 'In Progress', 'Done'];
  const workstreams = ['PI Loyalty', 'PI CEI', 'PI Qualtrics', 'WI CEI', 'WI Planned Sponsor'];
  const teammates = ['AG', 'CL', 'HB', 'JD', 'JM', 'KJ', 'MK'];

  return (
    <form className='capacityForm'>
      <h2>Edit Project Details</h2>
      <hr />
      <h4>Status</h4>
      <label>Start Status:
        <select id='startStatus' name='startStatus' defaultValue={startStatus} onChange={setStartStatus}>
          {allowableStatuses.map(entry => (
            <option key={entry} value={entry}>{entry}</option>
          ))}
        </select>
      </label>
      <label>Current Status:
        <select id='currentStatus' name='currentStatus' defaultValue={currentStatus} onChange={setCurrentStatus}>
          {allowableStatuses.map(entry => (
            <option key={entry} value={entry}>{entry}</option>
          ))}
        </select>
      </label>
      <hr />
      <h4>Project Information</h4>
      <label>Workstream:
        <select id='workstream' name='workstream' defaultValue={workstram} onChange={setWorkstream}>
          {workstreams.map(entry => (
            <option key={entry} value={entry}>{entry}</option>
          ))}
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
        <input id='weeklyPlannedCapacity' name='weeklyPlannedCapacity' defaultValue={weeklyPlannedCapacity} type='number' readOnly={true}></input>
      </label>
      <hr />
      <h4>Teammate Roles</h4>
      <label>TC:
        <select id='tc' name='tc' defaultValue={tc} onChange={setTc}>
          {teammates.map(entry => (
            <option key={entry} value={entry}>{entry}</option>
          ))}
        </select>
      </label>
      <label>TPM:
        <select id='tpm' name='tpm' defaultValue={tpm} onChange={setTpm}>
          {teammates.map(entry => (
            <option key={entry} value={entry}>{entry}</option>
          ))}
        </select>
      </label>
      <label>TL:
        <select id='tl' name='tl' defaultValue={tl} onChange={setTl}>
          {teammates.map(entry => (
            <option key={entry} value={entry}>{entry}</option>
          ))}
        </select>
      </label>
      <label>PL:
        <select id='pl' name='pl' defaultValue={pl} onChange={setPl}>
          {teammates.map(entry => (
            <option key={entry} value={entry}>{entry}</option>
          ))}
        </select>
      </label>
      <input type='button' value='Cancel' id='cancel'></input>
      <input type='submit' value='Save' id='save'></input>
    </form>
  );
};

export default CapacityForm;