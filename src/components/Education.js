import React, { Component } from 'react';
import uniqid from 'uniqid';

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edu: [],
      eduDisplay: true, //does this need to go within the object???
      eduNewForm: false,
      eduNewBtn: false,
      eduEdit: '',
      eduName: '',
      eduTitle: '',
      eduStart: '',
      eduEnd: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmitedu = this.onSubmitedu.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onNew = this.onNew.bind(this);
    this.findIndex = this.findIndex.bind(this);
    this.onUpdateedu = this.onUpdateedu.bind(this);
  }

  handleInputChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    this.setState({
      [name]: value
    })
  }

  eduFactory = (name, title, start, end, key) => {
    return { name, title, start, end, key }
  }

  //how does this know which object in the array to fill from, edit and replace and how does it do that?
  //could add a state to make add object to end of array or changing it conditional
    //or just add a different function for edit instead of submit
  onSubmitedu = (e) => {
    e.preventDefault();
    const { eduName, eduTitle, eduStart, eduEnd, edu, } = this.state
    this.setState({
      edu: [
        ...edu, 
        {
        name: eduName,
        title: eduTitle,
        start: eduStart,
        end: eduEnd,
        key: uniqid(),
        }
      ],
      eduName: '',
      eduTitle: '',
      eduStart: '',
      eduEnd: '',
    });
    this.setState({ 
      eduDisplay: false, //does this need to go within the object???
      eduNewBtn: true,
      eduNewForm: false,
    });
  };

  onUpdateedu = (e) => {
    e.preventDefault();
    const { eduName, eduTitle, eduStart, eduEnd, edu, } = this.state
    this.setState({
      edu: edu.map(x => {
        if (x.key === e.target.id) {
          x.name = eduName;
          x.title = eduTitle;
          x.start = eduStart;
          x.end = eduEnd;
          return x; //maybe return the whole thing in ()?
        } else {
          return x;
        }
      }),
      eduEdit: '',
      eduNewBtn: true,
      eduName: '',
      eduTitle: '',
      eduStart: '',
      eduEnd: '',
    })
  }

  findIndex = (e) => {
    return this.state.edu.findIndex(x => x.key === e.target.id)
  }

  onEdit = (e) => {
    e.preventDefault();
    const index = this.findIndex(e);
    const editID = e.target.id
    // function/const to get position of object in array and then add to line below - maybe function is not in in this function
    const { name, title, start, end } = this.state.edu[index] // add position based on object key with [1]
    this.setState({
      // eduDisplay: true, //need to figure out something for this
      eduNewBtn: false,
    })
    //this needs to input the values from the correct object or apparantly it already does that somehow
    this.setState({
      eduName: name,
      eduTitle: title,
      eduStart: start,
      eduEnd: end,
      eduEdit: editID,
      newDisplay: false,
    });
  };

  onNew = () => {
    this.setState({
      eduNewBtn: false,
      eduNewForm: true,
      eduEdit: '',
    })
  }

  eduForm = () => {
    const { eduName, eduTitle, eduStart, eduEnd, eduEdit } = this.state
    return (
      <div >
        <h3 >Education</h3>
        <form onSubmit={eduEdit === '' ? this.onSubmitedu : this.onUpdateedu} id={eduEdit ? eduEdit : null} > {/* Maybe have this hidden until until New Company btn is pressed */}
          <label htmlFor="" >School Name</label><br/> 
          <input type="text" onChange={this.handleInputChange} value={eduName} name='eduName'  /><br/>
          <label htmlFor="" >Title of Study</label><br/>
          <input type="text" onChange={this.handleInputChange} value={eduTitle} name='eduTitle'  /><br/>
          <label htmlFor="" >Start Date</label><br/>
          <input type="date" onChange={this.handleInputChange} value={eduStart} name='eduStart'  /><br/>
          <label htmlFor="" >End Date</label><br/>
          <input type="date" onChange={this.handleInputChange} value={eduEnd} name='eduEnd'  /><br/>
          <button >{eduEdit === '' ? 'Submit' : 'Update'}</button> {/* does this need to have a key? */}
        </form>
      </div>
    )
  }

  eduFill = () => {
    const { edu, eduEdit } = this.state;
    return (
      <div >
        {edu.map((x) => {
          if (eduEdit === x.key) {
            return (
              <this.eduForm key={uniqid()} /> //change this to be a new special Edit Form
            );
          } else {
          return (
            <div key={uniqid()}>
              <h3 >{x.name}</h3>
              <button  onClick={this.onEdit} id={x.key}>Edit</button>
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

  eduDOM = () => {
    const { eduDisplay } = this.state;
    return (
        eduDisplay ? <this.eduForm /> : <this.eduFill /> //might need to change if eduDisplay goes into object
    )
  }

  newBtn = () => {
    const { eduNewBtn } = this.state;
    return (
      eduNewBtn ? <button onClick={this.onNew} >New Education</button> : null
    )
  }

  newForm = () => {
    const { eduNewForm } = this.state;
    return (
      eduNewForm ? <this.eduForm /> : null
    )
  }

  render() {
    return (
    <div >
      <this.eduDOM />
      <this.newBtn />
      <this.newForm />
      </div>
    )
  }
}

export default Education;