import React from 'react';

const GenFill = (props) => {
    const { name, email, phone, onEdit } = props;
    return (
        <div>
            <h3>General Information</h3>
            <button onClick={onEdit}>Edit</button>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    )
}

export default GenFill;