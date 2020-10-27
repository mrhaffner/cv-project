import React, { useState } from 'react';
import ExpFill from './ExpFill'
import uniqid from 'uniqid';
import ExpForm from './ExpForm'

const Experience = () => {
  const [exp, setExp] = useState([]);
  const [nameInput, setNameInput] = useState('');
  const [titleInput, setTitleInput] = useState('');
  const [tasksInput, setTaskInput] = useState('');
  const [startInput, setStartInput] = useState('');
  const [endInput, setEndInput] = useState('')
  const [display, setDisplay] = useState(true);
  const [newForm, setNewForm] = useState(false);
  const [newBtn, setNewBtn] = useState(false);
  const [expEdit, setExpEdit] = useState('');

  const handleInputName = (e) => {
    const value = e.target.value;
    setNameInput(value)
  }

  const handleInputTitle = (e) => {
    const value = e.target.value;
    setTitleInput(value)
  }

  const handleInputTask = (e) => {
    const value = e.target.value;
    setTaskInput(value)
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
  // const expFactory = (name, title, tasks, start, end, key) => {
  //   return { name, title, tasks, start, end, key }
  // }

  const onSubmitExp = (e) => {
    e.preventDefault();
    //this probably won't work properly with hooks or is it the solution to merging state?
    setExp([
      ...exp, 
      {
      name: nameInput,
      title: titleInput,
      tasks: tasksInput,
      start: startInput,
      end: endInput,
      key: uniqid(),
      }
    ]);
    setNameInput('');
    setTitleInput('');
    setTaskInput('');
    setStartInput('');
    setEndInput('');
    setDisplay(false);
    setNewBtn(true);
    setNewForm(false);
  };

  const onUpdateExp = (e) => {
    e.preventDefault();
    // this probably won't work, needs to merge previous states, also not sure about the 'exp.map'
    setExp(exp.map(x => {
      if (x.key === e.target.id) {
        x.name = nameInput;
        x.title = titleInput;
        x.tasks = tasksInput;
        x.start = startInput;
        x.end = endInput;
        return x;
      } else {
        return x;
      }
    }))
    setNameInput('');
    setTitleInput('');
    setTaskInput('');
    setStartInput('');
    setEndInput('');
    setNewBtn(true);
    setExpEdit('');
  }

  const findIndex = (e) => {
    return exp.findIndex(x => x.key === e.target.id)
  };

  const onEdit = (e) => {
    e.preventDefault();
    const index = findIndex(e);
    const editID = e.target.id
    // this should work....
    const { name, title, tasks, start, end } = exp[index]
    setNewBtn(false);
    setDisplay(false);
    setNewForm(false);
    setExpEdit(editID);
    // Will this work?
    setNameInput(name);
    setTitleInput(title);
    setTaskInput(tasks);
    setStartInput(start);
    setEndInput(end);
  };

  const onNew = () => {
    setNewBtn(false);
    setNewForm(true);
    setExpEdit('');
  }

  return (
    <div >
      {display ? <ExpForm nameInput={nameInput} titleInput={titleInput} tasksInput={tasksInput} startInput={startInput} endInput={endInput} expEdit={expEdit} onUpdateExp={onUpdateExp} onSubmitExp={onSubmitExp} handleInputName={handleInputName} handleInputTitle={handleInputTitle} handleInputTask={handleInputTask} handleInputStart={handleInputStart} handleInputEnd={handleInputEnd} /> 
        : <ExpFill exp={exp} nameInput={nameInput} titleInput={titleInput} tasksInput={tasksInput} startInput={startInput} endInput={endInput} expEdit={expEdit} onUpdateExp={onUpdateExp} onSubmitExp={onSubmitExp} onEdit={onEdit} handleInputName={handleInputName} handleInputTitle={handleInputTitle} handleInputTask={handleInputTask} handleInputStart={handleInputStart} handleInputEnd={handleInputEnd} />}
      {newBtn ? <button onClick={onNew}>New Experience</button> : null}
      {newForm ? <ExpForm nameInput={nameInput} titleInput={titleInput} tasksInput={tasksInput} startInput={startInput} endInput={endInput} expEdit={expEdit} onUpdateExp={onUpdateExp} onSubmitExp={onSubmitExp} handleInputName={handleInputName} handleInputTitle={handleInputTitle} handleInputTask={handleInputTask} handleInputStart={handleInputStart} handleInputEnd={handleInputEnd}/> 
        : null}
    </div>
  )

}

export default Experience;