import React, { useState } from 'react';
import EduFill from './EduFill'
import uniqid from 'uniqid';
import EduForm from './EduForm'

const Education = () => {
  const [edu, setEdu] = useState([]);
  const [nameInput, setNameInput] = useState('');
  const [titleInput, setTitleInput] = useState('');
  const [startInput, setStartInput] = useState('');
  const [endInput, setEndInput] = useState('')
  const [display, setDisplay] = useState(true);
  const [newForm, setNewForm] = useState(false);
  const [newBtn, setNewBtn] = useState(false);
  const [eduEdit, setEduEdit] = useState('');

  const handleInputName = (e) => {
    const value = e.target.value;
    setNameInput(value)
  }

  const handleInputTitle = (e) => {
    const value = e.target.value;
    setTitleInput(value)
  }

  const handleInputStart = (e) => {
    const value = e.target.value;
    setStartInput(value)
  }

  const handleInputEnd = (e) => {
    const value = e.target.value;
    setEndInput(value)
  }

  //apparantly I never used this?
  // const eduFactory = (name, title, start, end, key) => {
  //   return { name, title, start, end, key }
  // }

  const onSubmitEdu = (e) => {
    e.preventDefault();
    //this probably won't work properly with hooks or is it the solution to merging state?
    setEdu([
      ...edu, 
      {
      name: nameInput,
      title: titleInput,
      start: startInput,
      end: endInput,
      key: uniqid(),
      }
    ]);
    setNameInput('');
    setTitleInput('');
    setStartInput('');
    setEndInput('');
    setDisplay(false);
    setNewBtn(true);
    setNewForm(false);
  };

  const onUpdateEdu = (e) => {
    e.preventDefault();
    // this probably won't work, needs to merge previous states, also not sure about the 'edu.map'
    setEdu(edu.map(x => {
      if (x.key === e.target.id) {
        x.name = nameInput;
        x.title = titleInput;
        x.start = startInput;
        x.end = endInput;
        return x;
      } else {
        return x;
      }
    }))
    setNameInput('');
    setTitleInput('');
    setStartInput('');
    setEndInput('');
    setNewBtn(true);
    setEduEdit('');
  }

  const findIndex = (e) => {
    return edu.findIndex(x => x.key === e.target.id)
  };

  const onEdit = (e) => {
    e.preventDefault();
    const index = findIndex(e);
    const editID = e.target.id
    // this should work....
    const { name, title, start, end } = edu[index]
    setNewBtn(false);
    setDisplay(false);
    setNewForm(false);
    setEduEdit(editID);
    // Will this work?
    setNameInput(name);
    setTitleInput(title);
    setStartInput(start);
    setEndInput(end);
  };

  const onNew = () => {
    setNewBtn(false);
    setNewForm(true);
    setEduEdit('');
  }

  return (
    <div >
      {display ? <EduForm nameInput={nameInput} titleInput={titleInput} startInput={startInput} endInput={endInput} eduEdit={eduEdit} onUpdateEdu={onUpdateEdu} onSubmitEdu={onSubmitEdu} handleInputName={handleInputName} handleInputTitle={handleInputTitle} handleInputStart={handleInputStart} handleInputEnd={handleInputEnd} /> 
        : <EduFill edu={edu} nameInput={nameInput} titleInput={titleInput} startInput={startInput} endInput={endInput} eduEdit={eduEdit} onUpdateEdu={onUpdateEdu} onSubmitEdu={onSubmitEdu} onEdit={onEdit} handleInputName={handleInputName} handleInputTitle={handleInputTitle} handleInputStart={handleInputStart} handleInputEnd={handleInputEnd} />}
      {newBtn ? <button onClick={onNew}>New Education</button> : null}
      {newForm ? <EduForm nameInput={nameInput} titleInput={titleInput} startInput={startInput} endInput={endInput} eduEdit={eduEdit} onUpdateEdu={onUpdateEdu} onSubmitEdu={onSubmitEdu} handleInputName={handleInputName} handleInputTitle={handleInputTitle} handleInputStart={handleInputStart} handleInputEnd={handleInputEnd}/> 
        : null}
    </div>
  )

}

export default Education;