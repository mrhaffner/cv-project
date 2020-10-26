import React, { Component } from 'react';
import GenFill from './GenFill';
import GenForm from './GenForm';

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
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmitGen = this.onSubmitGen.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  handleInputChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    this.setState({
      [name]: value
    })
  }

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

  render() {
    const { genDisplay, genName, genEmail, genPhone } = this.state;
    const { name, email, phone } = this.state.gen;
    return (
        genDisplay ? <GenForm genName={genName} genEmail={genEmail} genPhone={genPhone} handleInputChange={this.handleInputChange} onSubmitGen={this.onSubmitGen} /> : <GenFill name={name} email={email} phone={phone} onEdit={this.onEdit} />
    )
  }
}

export default General;