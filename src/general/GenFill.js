import React from 'react';

const GenFill = (props) => {
    const { nameG, email, phone, onEdit } = props;
    return (
        <div>
            <h3>General Information</h3>
            <button onClick={onEdit}>Edit</button>
            <p>{nameG}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    )
}

export default GenFill;