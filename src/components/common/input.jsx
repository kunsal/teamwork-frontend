import React from 'react';

const Input = ({name, label, error, id, ...rest}) => {
    return ( 
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input 
                {...rest} 
                name={name} 
                id={id}
                className="form-control" 
            />
            {error && <small id="emailHelp" className="form-text text-danger">{error}</small>}
        </div>
    );
}

export default Input;