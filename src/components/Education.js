import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            <h3>Education</h3>
            <form action=""> {/* Maybe have this hidden until until New Education btn is pressed */}
                <label htmlFor="">School Name</label><br/> 
                <input type="text"/><br/>
                <label htmlFor="">Title of Study</label><br/>
                <input type="text"/><br/>
                <label htmlFor="">Start Date</label><br/>
                <input type="date"/><br/>
                <label htmlFor="">End Date</label><br/>
                <input type="date"/><br/>
                <button>Submit</button>
            </form>
        </div>
    )
  }
}

export default Education;


// school name
// title of study
// date of study