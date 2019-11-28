import React, { Component } from 'react';

class Select extends Component {
    
    render() { 
        const {name, label, error, id, options, ...rest} = this.props;
        return ( 
            <div className="form-group">
                <label htmlFor={id}>{label}</label>
                <select {...rest} name={name} id={id} className="form-control">
                    <option value="">-- Select --</option>
                    {options.map(option => {
                        const obj = Object.keys(option);
                        const k = obj[0];
                        const v = obj[1];
                        return (
                        <option value={option[k]} key={option[k]}>{option[v]}</option>
                    )})}
                </select>
                {error && <small className="form-text text-danger">{error}</small>}
            </div>
        );
    }
}
 
export default Select;