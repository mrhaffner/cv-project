import React, { Component } from 'react';
import General from './components/General.js';
import Experience from './components/Experience.js';
import Education from './components/Education.js';
import GeneralFill from './components/GeneralFill.js';
import ExperienceFill from './components/ExperienceFill.js';
import EducationFill from './components/EducationFill.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>CV</h1>
        <General />
        <GeneralFill />
        <Experience />
        <ExperienceFill />
        <Education />
        <EducationFill />
      </div>
    )
  }
  
}

export default App;

// have a state for each form as complete or not which displays either an input or a finished form (how to do with new ___ button?)
  //when you hit edit, it will bring up every field already filled in (if there is an object in array, then populate if not everything is blank)

// Be sure to include an edit and submit button for each section or for the whole CV, your preference. 
// The submit button should submit your form and display the value of your input fields in HTML elements. 
// The edit button should add back (display) the input fields, 
//   with the previously displayed information as values. In those input fields, 
//     you should be able to edit and resubmit the content. 
//     You’re going to make heavy use of state and props, so make sure you understood those concepts.