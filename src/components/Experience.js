import React, { Component } from 'react';

class Experience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            exp: {
              name: '',
              title: '',
              tasks: '',
              start: '',
              end: '',
            },
            expDisplay: true,
            expName: '',
            expTitle: '',
            expTasks: '',
            expStart: '',
            expEnd: '',
          };

          this.handleInputChange = this.handleInputChange.bind(this);
          this.onSubmitExp = this.onSubmitExp.bind(this);
          this.onEdit = this.onEdit.bind(this);
        }

        handleInputChange = (e) => {
          const value = e.target.value
          const name = e.target.name
          this.setState({
            [name]: value
          })
        }

        onSubmitExp = (e) => {
          e.preventDefault();
          const { expName, expTitle, expTasks, expStart, expEnd } = this.state
          this.setState({
            exp: {
              name: expName,
              title: expTitle,
              tasks: expTasks,
              start: expStart,
              end: expEnd,
            },
            expName: '',
            expTitle: '',
            expTasks: '',
            expStart: '',
            expEnd: '',
          });
          this.setState({expDisplay: false})
        };

        onEdit = (e) => {
            e.preventDefault();
            const { name, title, tasks, start, end } = this.state.exp
            this.setState({expDisplay: true})
            this.setState({
                expName: name,
                expTitle: title,
                expTasks: tasks,
                expStart: start,
                expEnd: end,
            });
          };
  
    expForm = () => {
      const { expName, expTitle, expTasks, expStart, expEnd } = this.state
      return (
        <div>
            <h3>Experience</h3>
            <form onSubmit={this.onSubmitExp}> {/* Maybe have this hidden until until New Company btn is pressed */}
                <label htmlFor="">Company Name</label><br/> 
                <input type="text" onChange={this.handleInputChange} value={expName} name='expName' /><br/>
                <label htmlFor="">Position Title</label><br/>
                <input type="text" onChange={this.handleInputChange} value={expTitle} name='expTitle' /><br/>
                <label htmlFor="">Main Tasks</label><br/> {/* repeated in UL */}
                <input type="text" onChange={this.handleInputChange} value={expTasks} name='expTasks' /><br/>
                <label htmlFor="">Start Date</label><br/>
                <input type="date" onChange={this.handleInputChange} value={expStart} name='expStart' /><br/>
                <label htmlFor="">End Date</label><br/>
                <input type="date" onChange={this.handleInputChange} value={expEnd} name='expEnd' /><br/>
                <button>Submit</button>
            </form>
        </div>
      )
    }

    expFill = () => {
        const { name, title, tasks, start, end } = this.state.exp;
        return (
            <div>
            {/* {tasks.map((task, index) => {

            return ( */}
                <div>
                    <h3>{name}</h3>
                    <button onClick={this.onEdit}>Edit</button>
                    <p>{title}</p>
                    <p>{tasks}</p>
                    <p>{start}</p>
                    <p>{end}</p>
                </div>
                {/* );
            })} */}
                <button>New Experience</button>
            </div>
        )
    }

    expDOM = () => {
        const { expDisplay } = this.state;
        return (
            expDisplay ? <this.expForm /> : <this.expFill />
        )
    }

    render() {
        return (<this.expDOM />)
    }
}

export default Experience;