import React, { Component } from 'react';
import uniqid from 'uniqid';

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
    });
  };

  onNew = () => {
    this.setState({
      expNewBtn: false,
      expNewForm: true,
      expEdit: '',
    })
  }

  expForm = () => {
    const { expName, expTitle, expTasks, expStart, expEnd, expEdit } = this.state
    return (
      <div >
        <h3 >Experience</h3>
        <form onSubmit={expEdit === '' ? this.onSubmitExp : this.onUpdateExp} id={expEdit ? expEdit : null} >
          <label htmlFor="" >Company Name</label><br/> 
          <input type="text" onChange={this.handleInputChange} value={expName} name='expName'  /><br/>
          <label htmlFor="" >Position Title</label><br/>
          <input type="text" onChange={this.handleInputChange} value={expTitle} name='expTitle'  /><br/>
          <label htmlFor="" >Main Tasks</label><br/>
          <input type="text" onChange={this.handleInputChange} value={expTasks} name='expTasks'  /><br/>
          <label htmlFor="" >Start Date</label><br/>
          <input type="date" onChange={this.handleInputChange} value={expStart} name='expStart'  /><br/>
          <label htmlFor="" >End Date</label><br/>
          <input type="date" onChange={this.handleInputChange} value={expEnd} name='expEnd'  /><br/>
          <button >{expEdit === '' ? 'Submit' : 'Update'}</button>
        </form>
      </div>
    )
  }

  expFill = () => {
    const { exp, expEdit } = this.state;
    return (
      <div >
        {exp.map((x) => {
          if (expEdit === x.key) {
            return (
              <this.expForm   />
            );
          } else {
          return (
            <div key={uniqid()}>
              <h3 >{x.name}</h3>
              <button  onClick={this.onEdit} id={x.key}>Edit</button>
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

  expDOM = () => {
    const { expDisplay } = this.state;
    return (
        expDisplay ? <this.expForm /> : <this.expFill />
    )
  }

  newBtn = () => {
    const { expNewBtn } = this.state;
    return (
      expNewBtn ? <button onClick={this.onNew} >New Experience</button> : null
    )
  }

  newForm = () => {
    const { expNewForm } = this.state;
    return (
      expNewForm ? <this.expForm /> : null
    )
  }

  render() {
    return (
      <div >
        <this.expDOM />
        <this.newBtn />
        <this.newForm />
      </div>
    )
  }
}

export default Experience;