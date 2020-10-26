import React, { Component } from 'react';
import EduFill from './EduFill'
import uniqid from 'uniqid';
import EduForm from './EduForm'
class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edu: [],
      eduDisplay: true,
      eduNewForm: false,
      eduNewBtn: false,
      eduEdit: '',
      eduName: '',
      eduTitle: '',
      eduStart: '',
      eduEnd: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmitEdu = this.onSubmitEdu.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onNew = this.onNew.bind(this);
    this.findIndex = this.findIndex.bind(this);
    this.onUpdateEdu = this.onUpdateEdu.bind(this);
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

  onSubmitEdu = (e) => {
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
      eduDisplay: false,
      eduNewBtn: true,
      eduNewForm: false,
    });
  };

  onUpdateEdu = (e) => {
    e.preventDefault();
    const { eduName, eduTitle, eduStart, eduEnd, edu, } = this.state
    this.setState({
      edu: edu.map(x => {
        if (x.key === e.target.id) {
          x.name = eduName;
          x.title = eduTitle;
          x.start = eduStart;
          x.end = eduEnd;
          return x;
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
    const { name, title, start, end } = this.state.edu[index]
    this.setState({
      eduNewBtn: false,
    })
    this.setState({
      eduName: name,
      eduTitle: title,
      eduStart: start,
      eduEnd: end,
      eduEdit: editID,
      newDisplay: false,
      eduNewForm: false
    });
  };

  onNew = () => {
    this.setState({
      eduNewBtn: false,
      eduNewForm: true,
      eduEdit: '',
    })
  }

  render() {
    const { edu, eduEdit, eduName, eduTitle, eduStart, eduEnd, eduDisplay, eduNewBtn, eduNewForm } = this.state
    return (
      <div >
        {eduDisplay ? <EduForm eduName={eduName} eduTitle={eduTitle} eduStart={eduStart} eduEnd={eduEnd} eduEdit={eduEdit} onUpdateEdu={this.onUpdateEdu} onSubmitEdu={this.onSubmitEdu} handleInputChange={this.handleInputChange} /> 
          : <EduFill edu={edu} eduName={eduName} eduTitle={eduTitle} eduStart={eduStart} eduEnd={eduEnd} eduEdit={eduEdit} onUpdateEdu={this.onUpdateEdu} onSubmitEdu={this.onSubmitEdu} handleInputChange={this.handleInputChange} onEdit={this.onEdit} />}
        {eduNewBtn ? <button onClick={this.onNew}>New Education</button> : null}
        {eduNewForm ? <EduForm eduName={eduName} eduTitle={eduTitle} eduStart={eduStart} eduEnd={eduEnd} eduEdit={eduEdit} onUpdateEdu={this.onUpdateEdu} onSubmitEdu={this.onSubmitEdu} handleInputChange={this.handleInputChange}/> 
          : null}
      </div>
    )
  }
}

export default Education;