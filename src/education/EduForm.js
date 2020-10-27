import React from 'react';

const EduForm = (props) => {
    const { nameInput, titleInput, startInput, endInput, eduEdit, onUpdateEdu, onSubmitEdu, handleInputName, handleInputTitle, handleInputStart, handleInputEnd } = props
    return (
        <div >
            <h3>Education</h3>
            <form onSubmit={eduEdit === '' ? onSubmitEdu : onUpdateEdu} id={eduEdit ? eduEdit : null} >
                <label htmlFor="" >School Name</label><br/> 
                <input type="text" onChange={handleInputName} value={nameInput} name='nameInput'  /><br/>
                <label htmlFor="" >Title of Study</label><br/>
                <input type="text" onChange={handleInputTitle} value={titleInput} name='titleInput'  /><br/>
                <label htmlFor="" >Start Date</label><br/>
                <input type="date" onChange={handleInputStart} value={startInput} name='startInput'  /><br/>
                <label htmlFor="" >End Date</label><br/>
                <input type="date" onChange={handleInputEnd} value={endInput} name='endInput'  /><br/>
                <button >{eduEdit === '' ? 'Submit' : 'Update'}</button>
            </form>
        </div>
    )
}

export default EduForm;