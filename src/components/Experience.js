import React, { Component } from 'react';

class Experience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            exp: [],
            expDisplay: true,
            expNewForm: false,
            expNewBtn: false,
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
        }

        handleInputChange = (e) => {
          const value = e.target.value
          const name = e.target.name
          this.setState({
            [name]: value
          })
        }

        //factory to go below
        expFactory = (name, title, tasks, start, end) => {
          return { name, title, tasks, start, end }
        }

        onSubmitExp = (e) => {
          e.preventDefault();
          const { expName, expTitle, expTasks, expStart, expEnd, exp } = this.state
          this.setState({
            exp: [
              ...exp, 
              {
              name: expName,
              title: expTitle,
              tasks: expTasks,
              start: expStart,
              end: expEnd,
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
          });
        };

        onEdit = (e) => {
            e.preventDefault();
            const { name, title, tasks, start, end } = this.state.exp // add position based on object key with [1]
            this.setState({
              expDisplay: true,
              expNewBtn: false,
            })
            this.setState({
                expName: name,
                expTitle: title,
                expTasks: tasks,
                expStart: start,
                expEnd: end,
            });
          };

        onNew = (e) => {
          this.setState({
            expNewBtn: false,
            expNewForm: true,
          })
        }
  
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
        const { exp } = this.state;
        return (
            <div>
            {exp.map((x) => {
              return (
                <div>
                  <h3>{x.name}</h3>
                  <button onClick={this.onEdit}>Edit</button>
                  <p>{x.title}</p>
                  <p>{x.tasks}</p>
                  <p>{x.start}</p>
                  <p>{x.end}</p>
                </div>
              );
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
        expNewBtn ? <button onClick={this.onNew}>New Experience</button> : null
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
        <div>
          <this.expDOM />
          <this.newBtn />
          <this.newForm />
          </div>
        )
    }
}

export default Experience;