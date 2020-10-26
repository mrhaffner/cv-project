import React from 'react';

const EduForm = (props) => {
    const { eduName, eduTitle, eduStart, eduEnd, eduEdit, onUpdateEdu, onSubmitEdu, handleInputChange } = props
    return (
        <div >
            <h3>Education</h3>
            <form onSubmit={eduEdit === '' ? onSubmitEdu : onUpdateEdu} id={eduEdit ? eduEdit : null} >
                <label htmlFor="" >School Name</label><br/> 
                <input type="text" onChange={handleInputChange} value={eduName} name='eduName'  /><br/>
                <label htmlFor="" >Title of Study</label><br/>
                <input type="text" onChange={handleInputChange} value={eduTitle} name='eduTitle'  /><br/>
                <label htmlFor="" >Start Date</label><br/>
                <input type="date" onChange={handleInputChange} value={eduStart} name='eduStart'  /><br/>
                <label htmlFor="" >End Date</label><br/>
                <input type="date" onChange={handleInputChange} value={eduEnd} name='eduEnd'  /><br/>
                <button >{eduEdit === '' ? 'Submit' : 'Update'}</button>
            </form>
        </div>
    )
}

export default EduForm;