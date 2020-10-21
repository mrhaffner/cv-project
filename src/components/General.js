import React, { Component } from 'react';

class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            <h3>General Infromation</h3>
            <form action="">
                <label htmlFor="">Name</label><br/> {/* first and last? */}
                <input type="text"/><br/>
                <label htmlFor="">Email</label><br/>
                <input type="text"/><br/>
                <label htmlFor="">Phone Number</label><br/>
                <input type="text"/><br/>
                <button>Submit</button>
            </form>
        </div>
    )
  }
}

export default General;


//name
//email
//phone number