import React, { useState } from 'react';
import GenFill from './GenFill';
import GenForm from './GenForm';

const General = () => {
  const [nameG, setNameG] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [display, setDisplay] = useState(true)
  const [input, setInput] = useState(
    {
      nameInput: '',
      emailInput: '',
      phoneInput: '',
    }
  )

  const handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const { nameInput, emailInput, phoneInput } = input

  const onSubmitGen = (e) => {
    e.preventDefault();
    setNameG(nameInput);
    setEmail(emailInput);
    setPhone(phoneInput);
    setInput({
      nameInput: '',
      emailInput: '',
      phoneInput: '',
    })
    setDisplay(false);
  };

  const onEdit = (e) => {
    e.preventDefault();
    setDisplay(true);
    setInput({
      nameInput: nameG,
      emailInput: email,
      phoneInput: phone,
    })
  };

  return (
      display ? <GenForm nameInput={nameInput} emailInput={emailInput} phoneInput={phoneInput} handleInputChange={handleInputChange} onSubmitGen={onSubmitGen} /> 
        : <GenFill nameG={nameG} email={email} phone={phone} onEdit={onEdit} />
  )
}

export default General;