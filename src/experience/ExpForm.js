import React from 'react';

const ExpForm = (props) => {
    const { expName, expTitle, expTasks, expStart, expEnd, expEdit, onUpdateExp, onSubmitExp, handleInputChange } = props
    return (
        <div >
            <h3 >Experience</h3>
            <form onSubmit={expEdit === '' ? onSubmitExp : onUpdateExp} id={expEdit ? expEdit : null} >
                <label htmlFor="" >Company Name</label><br/> 
                <input type="text" onChange={handleInputChange} value={expName} name='expName'  /><br/>
                <label htmlFor="" >Position Title</label><br/>
                <input type="text" onChange={handleInputChange} value={expTitle} name='expTitle'  /><br/>
                <label htmlFor="" >Main Tasks</label><br/>
                <input type="text" onChange={handleInputChange} value={expTasks} name='expTasks'  /><br/>
                <label htmlFor="" >Start Date</label><br/>
                <input type="date" onChange={handleInputChange} value={expStart} name='expStart'  /><br/>
                <label htmlFor="" >End Date</label><br/>
                <input type="date" onChange={handleInputChange} value={expEnd} name='expEnd'  /><br/>
                <button >{expEdit === '' ? 'Submit' : 'Update'}</button>
            </form>
        </div>
    )
}

export default ExpForm;