import React, { Component } from 'react';
import uniqid from 'uniqid';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exp: [],
      expDisplay: true, //does this need to go within the object???
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

  //how does this know which object in the array to fill from, edit and replace and how does it do that?
  //could add a state to make add object to end of array or changing it conditional
    //or just add a different function for edit instead of submit
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
      expDisplay: false, //does this need to go within the object???
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
          return x; //maybe return the whole thing in ()?
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
    // function/const to get position of object in array and then add to line below - maybe function is not in in this function
    const { name, title, tasks, start, end } = this.state.exp[index] // add position based on object key with [1]
    this.setState({
      // expDisplay: true, //need to figure out something for this
      expNewBtn: false,
    })
    //this needs to input the values from the correct object or apparantly it already does that somehow
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
      <div key={uniqid()}>
        <h3 key={uniqid()}>Experience</h3>
        <form onSubmit={expEdit === '' ? this.onSubmitExp : this.onUpdateExp} id={expEdit ? expEdit : null} key={uniqid()}> {/* Maybe have this hidden until until New Company btn is pressed */}
          <label htmlFor="" key={uniqid()}>Company Name</label><br/> 
          <input type="text" onChange={this.handleInputChange} value={expName} name='expName' key={uniqid()} /><br/>
          <label htmlFor="" key={uniqid()}>Position Title</label><br/>
          <input type="text" onChange={this.handleInputChange} value={expTitle} name='expTitle' key={uniqid()} /><br/>
          <label htmlFor="" key={uniqid()}>Main Tasks</label><br/>
          <input type="text" onChange={this.handleInputChange} value={expTasks} name='expTasks' key={uniqid()} /><br/>
          <label htmlFor="" key={uniqid()}>Start Date</label><br/>
          <input type="date" onChange={this.handleInputChange} value={expStart} name='expStart' key={uniqid()} /><br/>
          <label htmlFor="" key={uniqid()}>End Date</label><br/>
          <input type="date" onChange={this.handleInputChange} value={expEnd} name='expEnd' key={uniqid()} /><br/>
          <button key={uniqid()}>{expEdit === '' ? 'Submit' : 'Update'}</button> {/* does this need to have a key? */}
        </form>
      </div>
    )
  }

  expFill = () => {
    const { exp, expEdit } = this.state;
    return (
      <div key={uniqid()}>
        {exp.map((x) => {
          if (expEdit === x.key) {
            return (
              <this.expForm /> //change this to be a new special Edit Form
            );
          } else {
          return (
            <div key={uniqid()}>
              <h3 key={uniqid()}>{x.name}</h3>
              <button key={uniqid()} onClick={this.onEdit} id={x.key}>Edit</button>
              <p key={uniqid()}>{x.title}</p>
              <p key={uniqid()}>{x.tasks}</p>
              <p key={uniqid()}>{x.start}</p>
              <p key={uniqid()}>{x.end}</p>
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
        expDisplay ? <this.expForm /> : <this.expFill /> //might need to change if expDisplay goes into object
    )
  }

  newBtn = () => {
    const { expNewBtn } = this.state;
    return (
      expNewBtn ? <button onClick={this.onNew} key={uniqid()}>New Experience</button> : null
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
    <div key={uniqid()}>
      <this.expDOM />
      <this.newBtn />
      <this.newForm />
      </div>
    )
  }
}

export default Experience;