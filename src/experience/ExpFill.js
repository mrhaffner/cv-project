import React from 'react';
import ExpForm from './ExpForm'
import uniqid from 'uniqid';

const ExpFill = (props) => {
  const { exp, expEdit, nameInput, titleInput, tasksInput, startInput, endInput, onEdit, onUpdateExp, onSubmitExp, handleInputName, handleInputTitle, handleInputTask, handleInputStart, handleInputEnd } = props;
  return (
    <div>
      {exp.map((x) => {
        if (expEdit === x.key) {
          return (
            <ExpForm key='UniqIdHasFailedMe' nameInput={nameInput} titleInput={titleInput} tasksInput={tasksInput} startInput={startInput} endInput={endInput} expEdit={expEdit} onUpdateExp={onUpdateExp} onSubmitExp={onSubmitExp} handleInputName={handleInputName} handleInputTitle={handleInputTitle} handleInputTask={handleInputTask} handleInputStart={handleInputStart} handleInputEnd={handleInputEnd} />
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