import React from 'react';
import ExpForm from './ExpForm'
import uniqid from 'uniqid';

const ExpFill = (props) => {
  const { exp, expEdit, expName, expTitle, expTasks, expStart, expEnd, onEdit, onUpdateExp, onSubmitExp, handleInputChange } = props;
  return (
    <div>
      {exp.map((x) => {
        if (expEdit === x.key) {
          return (
            <ExpForm key='UniqIdHasFailedMe' expName={expName} expTitle={expTitle} expTasks={expTasks} expStart={expStart} expEnd={expEnd} expEdit={expEdit} onUpdateExp={onUpdateExp} onSubmitExp={onSubmitExp} handleInputChange={handleInputChange} />
          );
        } else {
        return (
          <div key={uniqid()}>
            <h3 >{x.name}</h3>
            <button onClick={onEdit} id={x.key}>Edit</button>
            <p >{x.title}</p>
            <p >{x.tasks}</p>
            <p >{x.start}</p>
            <p >{x.end}</p>
          </div>
        );
      }
      })}
    </div>
  )
}

export default ExpFill;