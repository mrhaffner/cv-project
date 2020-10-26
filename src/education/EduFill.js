import React from 'react';
import EduForm from './EduForm'
import uniqid from 'uniqid';

const EduFill = (props) => {
  const { edu, eduEdit, eduName, eduTitle, eduStart, eduEnd, onEdit, onUpdateEdu, onSubmitEdu, handleInputChange } = props;
  return (
    <div>
      {edu.map((x) => {
        if (eduEdit === x.key) {
          return (
            <EduForm key='UniqIdHasFailedMeAgain' eduName={eduName} eduTitle={eduTitle} eduStart={eduStart} eduEnd={eduEnd} eduEdit={eduEdit} onUpdateEdu={onUpdateEdu} onSubmitEdu={onSubmitEdu} handleInputChange={handleInputChange} />
          );
        } else {
        return (
          <div key={uniqid()}>
            <h3 >{x.name}</h3>
            <button onClick={onEdit} id={x.key}>Edit</button>
            <p >{x.title}</p>
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