import React from 'react';

const ExpForm = (props) => {
    const { nameInput, titleInput, tasksInput, startInput, endInput, expEdit, onUpdateExp, onSubmitExp, handleInputName, handleInputTitle, handleInputTask, handleInputStart, handleInputEnd } = props
    return (
        <div >
            <h3 >Experience</h3>
            <form onSubmit={expEdit === '' ? onSubmitExp : onUpdateExp} id={expEdit ? expEdit : null} >
                <label htmlFor="" >Company Name</label><br/> 
                <input type="text" onChange={handleInputName} value={nameInput} name='nameInput'  /><br/>
                <label htmlFor="" >Position Title</label><br/>
                <input type="text" onChange={handleInputTitle} value={titleInput} name='titleInput'  /><br/>
                <label htmlFor="" >Main Tasks</label><br/>
                <input type="text" onChange={handleInputTask} value={tasksInput} name='tasksInput'  /><br/>
                <label htmlFor="" >Start Date</label><br/>
                <input type="date" onChange={handleInputStart} value={startInput} name='startInput'  /><br/>
                <label htmlFor="" >End Date</label><br/>
                <input type="date" onChange={handleInputEnd} value={endInput} name='endInput'  /><br/>
                <button >{expEdit === '' ? 'Submit' : 'Update'}</button>
            </form>
        </div>
    )
}

export default ExpForm;