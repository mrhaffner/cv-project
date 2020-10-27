import React, { useState } from 'react';
import GenFill from './GenFill';
import GenForm from './GenForm';

const General = () => {
  const [nameG, setNameG] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [nameInput, setNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [phoneInput, setPhoneInput] = useState('')
  const [display, setDisplay] = useState(true)
  // const [gen, setGen] = useState(
  //   {
  //     name: '',
  //     email: '',
  //     phone: '',
  //   }
  // )

  //const { name, email, phone } = gen

  // const [input, setInput] = useState(
  //   {
  //     nameInput: '',
  //     emailInput: '',
  //     phoneInput: '',
  //   }
  // )
  
  //const { nameInput, emailInput, phoneInput } = input

  // const handleInputChange = (e) => {
  //   const value = e.target.value;
  //   const names = e.target.name;
  //   setInput({
  //     [names]: value
  //   })
  // }

  const handleInputName = (e) => {
      const value = e.target.value;
      setNameInput(value)
  }

  const handleInputEmail = (e) => {
    const value = e.target.value;
    setEmailInput(value)
  }

  const handleInputPhone = (e) => {
    const value = e.target.value;
    setPhoneInput(value)
  }

  const onSubmitGen = (e) => {
    e.preventDefault();
    setNameG(nameInput);
    setEmail(emailInput);
    setPhone(phoneInput);
    // setGen({
    //   name: nameInput,
    //   email: emailInput,
    //   phone: phoneInput,
    // })
    // setInput({
    //   nameInput: '',
    //   emailInput: '',
    //   phoneInput: '',
    // })
    setNameInput('');
    setEmailInput('');
    setPhoneInput('');
    setDisplay(false);
  };

  const onEdit = (e) => {
    e.preventDefault();
    setDisplay(true);
    setNameInput(nameG);
    setEmailInput(email);
    setPhoneInput(phone);
    // setInput({
    //   nameInput: name,
    //   emailInput: email,
    //   phoneInput: phone,
    // })
  };

  return (
    
      display ? <GenForm nameInput={nameInput} emailInput={emailInput} phoneInput={phoneInput} handleInputName={handleInputName} handleInputPhone={handleInputPhone} handleInputEmail={handleInputEmail} onSubmitGen={onSubmitGen} /> 
        : <GenFill nameG={nameG} email={email} phone={phone} onEdit={onEdit} />
  )
}

export default General;