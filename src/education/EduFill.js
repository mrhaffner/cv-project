import React from 'react';
import EduForm from './EduForm'
import uniqid from 'uniqid';

const EduFill = (props) => {
  const { edu, eduEdit, nameInput, titleInput, startInput, endInput, onEdit, onUpdateEdu, onSubmitEdu, handleInputName, handleInputTitle, handleInputTask, handleInputStart, handleInputEnd } = props;
  return (
    <div>
      {edu.map((x) => {
        if (eduEdit === x.key) {
          return (
            <EduForm key='UniqIdHasFailedMe!!!' nameInput={nameInput} titleInput={titleInput} startInput={startInput} endInput={endInput} eduEdit={eduEdit} onUpdateEdu={onUpdateEdu} onSubmitEdu={onSubmitEdu} handleInputName={handleInputName} handleInputTitle={handleInputTitle} handleInputTask={handleInputTask} handleInputStart={handleInputStart} handleInputEnd={handleInputEnd} />
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

export default EduFill;