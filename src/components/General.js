import React, { Component } from 'react';

class General extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gen: {
              name: '',
              email: '',
              phone: '',
            },
            genDisplay: true,
            genName: '',
            genEmail: '',
            genPhone: '',
          }
        }
      
        handleGenName = (e) => {
          this.setState({
            genName: e.target.value,
          });
        };
      
        handleGenEmail = (e) => {
          this.setState({
            genEmail: e.target.value,
          });
        };
      
        handleGenPhone = (e) => {
          this.setState({
            genPhone: e.target.value,
          });
        };
      
        onSubmitGen = (e) => {
          e.preventDefault();
          const { genName, genEmail, genPhone } = this.state
          this.setState({
            gen: {
              name: genName,
              email: genEmail,
              phone: genPhone,
            },
            genName: '',
            genEmail: '',
            genPhone: '',
          });
          this.setState({genDisplay: false})
        };

        onEdit = (e) => {
            e.preventDefault();
            const { name, email, phone } = this.state.gen
            this.setState({genDisplay: true})
            this.setState({
                genName: name,
                genEmail: email,
                genPhone: phone,
            });
            
          };
  
    genForm = () => {
        return (
            <div>
                <h3>General Infromation</h3>
                <form onSubmit={this.onSubmitGen}>
                    <label htmlFor="">Name</label><br/>
                    <input type="text" onChange={this.handleGenName}  value={this.state.genName} /><br/>
                    <label htmlFor="">Email</label><br/>
                    <input type="text" onChange={this.handleGenEmail} value={this.state.genEmail} /><br/>
                    <label htmlFor="">Phone Number</label><br/>
                    <input type="text" onChange={this.handleGenPhone} value={this.state.genPhone} /><br/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }

    genFill = () => {
        const { name, email, phone } = this.state.gen;
        return (
            <div>
                <h3>General Information</h3>
                <button onClick={this.onEdit}>Edit</button>
                <p>{name}</p>
                <p>{email}</p>
                <p>{phone}</p>
            </div>
        )
    }

    genDOM = () => {
        const { genDisplay } = this.state;
        return (
            genDisplay ? <this.genForm /> : <this.genFill />
        )
    }

    render() {
        return (<this.genDOM />)
    }
}

export default General;