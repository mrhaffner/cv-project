import React, { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            <h3>Experience</h3>
            <form action=""> {/* Maybe have this hidden until until New Company btn is pressed */}
                <label htmlFor="">Company Name</label><br/> 
                <input type="text"/><br/>
                <label htmlFor="">Position Title</label><br/>
                <input type="text"/><br/>
                <label htmlFor="">Main Tasks</label><br/> {/* repeated in UL */}
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

export default Experience;

// Company name
// position title
// main tasks
// date from and until when you worked for that company