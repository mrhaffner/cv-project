import React, { Component } from 'react';
import ExpFill from './ExpFill'
import uniqid from 'uniqid';
import ExpForm from './ExpForm'
class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exp: [],
      expDisplay: true,
      expNewForm: false,
      expNewBtn: false,
      expEdit: '',
      expName: '',
      expTitle: '',
      expTasks: '',
      expStart: '',
      expEnd: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmitExp = this.onSubmitExp.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onNew = this.onNew.bind(this);
    this.findIndex = this.findIndex.bind(this);
    this.onUpdateExp = this.onUpdateExp.bind(this);
  }

  handleInputChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    this.setState({
      [name]: value
    })
  }

  expFactory = (name, title, tasks, start, end, key) => {
    return { name, title, tasks, start, end, key }
  }

  onSubmitExp = (e) => {
    e.preventDefault();
    const { expName, expTitle, expTasks, expStart, expEnd, exp, } = this.state
    this.setState({
      exp: [
        ...exp, 
        {
        name: expName,
        title: expTitle,
        tasks: expTasks,
        start: expStart,
        end: expEnd,
        key: uniqid(),
        }
      ],
      expName: '',
      expTitle: '',
      expTasks: '',
      expStart: '',
      expEnd: '',
    });
    this.setState({ 
      expDisplay: false,
      expNewBtn: true,
      expNewForm: false,
    });
  };

  onUpdateExp = (e) => {
    e.preventDefault();
    const { expName, expTitle, expTasks, expStart, expEnd, exp, } = this.state
    this.setState({
      exp: exp.map(x => {
        if (x.key === e.target.id) {
          x.name = expName;
          x.title = expTitle;
          x.tasks = expTasks;
          x.start = expStart;
          x.end = expEnd;
          return x;
        } else {
          return x;
        }
      }),
      expEdit: '',
      expNewBtn: true,
      expName: '',
      expTitle: '',
      expTasks: '',
      expStart: '',
      expEnd: '',
    })
  }

  findIndex = (e) => {
    return this.state.exp.findIndex(x => x.key === e.target.id)
  }

  onEdit = (e) => {
    e.preventDefault();
    const index = this.findIndex(e);
    const editID = e.target.id
    const { name, title, tasks, start, end } = this.state.exp[index]
    this.setState({
      expNewBtn: false,
    })
    this.setState({
      expName: name,
      expTitle: title,
      expTasks: tasks,
      expStart: start,
      expEnd: end,
      expEdit: editID,
      newDisplay: false,
      expNewForm: false,
    });
  };

  onNew = () => {
    this.setState({
      expNewBtn: false,
      expNewForm: true,
      expEdit: '',
    })
  }

  render() {
    const { exp, expEdit, expName, expTitle, expTasks, expStart, expEnd, expDisplay, expNewBtn, expNewForm } = this.state
    return (
      <div >
        {expDisplay ? <ExpForm expName={expName} expTitle={expTitle} expTasks={expTasks} expStart={expStart} expEnd={expEnd} expEdit={expEdit} onUpdateExp={this.onUpdateExp} onSubmitExp={this.onSubmitExp} handleInputChange={this.handleInputChange} /> 
          : <ExpFill exp={exp} expName={expName} expTitle={expTitle} expTasks={expTasks} expStart={expStart} expEnd={expEnd} expEdit={expEdit} onUpdateExp={this.onUpdateExp} onSubmitExp={this.onSubmitExp} handleInputChange={this.handleInputChange} onEdit={this.onEdit} />}
        {expNewBtn ? <button onClick={this.onNew}>New Experience</button> : null}
        {expNewForm ? <ExpForm expName={expName} expTitle={expTitle} expTasks={expTasks} expStart={expStart} expEnd={expEnd} expEdit={expEdit} onUpdateExp={this.onUpdateExp} onSubmitExp={this.onSubmitExp} handleInputChange={this.handleInputChange}/> 
          : null}
      </div>
    )
  }
}

export default Experience;