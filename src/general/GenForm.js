import React from 'react';

const GenForm = (props) => {
    const { nameInput, emailInput, phoneInput, handleInputName, handleInputEmail, handleInputPhone, onSubmitGen } = props;
    return (
        <div>
            <h3>General Infromation</h3>
            <form onSubmit={onSubmitGen}>
                <label htmlFor="">Name</label><br/>
                <input type="text" onChange={handleInputName} value={nameInput} name='nameInput' /><br/>
                <label htmlFor="">Email</label><br/>
                <input type="text" onChange={handleInputEmail} value={emailInput} name='emailInput' /><br/>
                <label htmlFor="">Phone Number</label><br/>
                <input type="text" onChange={handleInputPhone} value={phoneInput} name='phoneInput' /><br/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default GenForm;