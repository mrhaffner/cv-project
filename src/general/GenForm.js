import React from 'react';

const GenForm = (props) => {
    const { genName, genEmail, genPhone, handleInputChange, onSubmitGen } = props;
    return (
        <div>
            <h3>General Infromation</h3>
            <form onSubmit={onSubmitGen}>
                <label htmlFor="">Name</label><br/>
                <input type="text" onChange={handleInputChange} value={genName} name='genName' /><br/>
                <label htmlFor="">Email</label><br/>
                <input type="text" onChange={handleInputChange} value={genEmail} name='genEmail' /><br/>
                <label htmlFor="">Phone Number</label><br/>
                <input type="text" onChange={handleInputChange} value={genPhone} name='genPhone' /><br/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default GenForm;